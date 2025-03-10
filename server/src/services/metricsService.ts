import { Message } from "../types/conversationTypes";

const getModelFactors = (model: string) => {
  const lower = model.toLowerCase();
  if (lower.includes("gpt-3 mini")) {
    return { energy: 0.15, co2: 2.16, waterMultiplier: 0.5 };
  } else if (lower.includes("o1")) {
    return { energy: 0.4, co2: 5.76, waterMultiplier: 1.5 };
  } else if (lower.includes("gpt-4")) {
    return { energy: 0.6, co2: 8.64, waterMultiplier: 2 };
  } else if (lower.includes("gpt-3")) {
    return { energy: 0.3, co2: 4.32, waterMultiplier: 1 };
  } else {
    return { energy: 0.3, co2: 4.32, waterMultiplier: 1 };
  }
};

/**
 * Converts a timestamp into a "YYYY-MM" format.
 */
const getMonthKey = (timestamp: number | undefined): string => {
  if (!timestamp) return "Unknown";
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}`; // YYYY-MM
};

/**
 * Calculates ChatGPT usage per month for different years.
 * @param messages - All messages from all conversations.
 * @returns A record of year-month counts.
 */
export const calculateUsageByMonth = (
  messages: Message[]
): Record<string, number> => {
  const usageByMonth: Record<string, number> = {};

  messages.forEach((message) => {
    const monthKey = getMonthKey(message.create_time);
    usageByMonth[monthKey] = (usageByMonth[monthKey] || 0) + 1;
  });

  return usageByMonth;
};

/**
 * Gets the top three months with the highest usage.
 * @param usageByMonth - Record of ChatGPT usage per month.
 * @returns An array of top 3 months sorted by usage.
 */
const getTopThreeMonths = (usageByMonth: Record<string, number>): string[] => {
  return Object.entries(usageByMonth)
    .sort((a, b) => b[1] - a[1]) // Sort descending by usage count
    .slice(0, 3) // Get top 3
    .map(([month]) => month);
};

/**
 * Calculates environmental impact for the top 3 most active months.
 */
export const calculateTopMonthsImpact = (
  usageByMonth: Record<string, number>,
  queriesByModel: Record<string, number>
) => {
  const topMonths = getTopThreeMonths(usageByMonth);
  const topMonthsImpact: Record<string, any> = {};

  topMonths.forEach((month) => {
    let totalQueries = usageByMonth[month] || 0;
    let totalEnergy = 0;
    let totalCO2 = 0;
    let totalWater = 0;

    Object.keys(queriesByModel).forEach((model) => {
      const factors = getModelFactors(model);
      const queriesForModel =
        (queriesByModel[model] /
          Object.values(usageByMonth).reduce((a, b) => a + b, 0)) *
        totalQueries;

      totalEnergy += factors.energy * queriesForModel;
      totalCO2 += factors.co2 * queriesForModel;
      totalWater +=
        Math.ceil(queriesForModel / 50) * 500 * factors.waterMultiplier;
    });

    topMonthsImpact[month] = {
      totalQueries,
      totalEnergy: totalEnergy.toFixed(2),
      totalCO2: totalCO2.toFixed(2),
      totalWater: totalWater.toFixed(2),
    };
  });

  return topMonthsImpact;
};

export const calculateOverallTotals = (
  queriesByModel: Record<string, number>
) => {
  let overallQueries = 0;
  let overallWater = 0;
  let overallCO2 = 0;
  let overallEnergy = 0;

  Object.keys(queriesByModel).forEach((model) => {
    const numQueries = queriesByModel[model];
    const factors = getModelFactors(model);

    overallQueries += numQueries;
    overallEnergy += factors.energy * numQueries;
    overallCO2 += factors.co2 * numQueries;
    overallWater += Math.ceil(numQueries / 50) * 500 * factors.waterMultiplier;
  });

  return { overallQueries, overallWater, overallCO2, overallEnergy };
};
