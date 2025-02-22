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
