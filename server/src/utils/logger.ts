import { Conversation } from "../types/conversationTypes";

/**
 * Logs details about processed conversations, environmental impact, and ChatGPT usage.
 */
export const logResults = (
  conversations: Conversation[],
  queriesByModel: Record<string, number>,
  overallMetrics: {
    overallQueries: number;
    overallWater: number;
    overallCO2: number;
    overallEnergy: number;
  },
  usageByMonth: Record<string, number>,
  topMonthsImpact: Record<string, any> // ✅ New parameter for top 3 months
): void => {
  console.log(`✅ Processed ${conversations.length} conversations.`);
  console.log("📜 First 5 Conversations:", conversations.slice(0, 5));

  // Log total messages
  const totalMessages = conversations.reduce(
    (sum, convo) => sum + convo.messages.length,
    0
  );
  console.log("📩 Total number of messages:", totalMessages);

  // Log total user queries
  const totalQueries = Object.values(queriesByModel).reduce(
    (sum, num) => sum + num,
    0
  );
  console.log("🗣️ Total user queries:", totalQueries);

  // Log per-model environmental impact
  Object.keys(queriesByModel).forEach((model) => {
    console.log(`🌍 Model: ${model}`);
    console.log(`   🔢 Total queries: ${queriesByModel[model]}`);
    console.log(
      `   💧 Water usage: ${overallMetrics.overallWater.toFixed(2)} ml`
    );
    console.log(
      `   🌫️ CO₂ emissions: ${overallMetrics.overallCO2.toFixed(2)} units`
    );
    console.log(
      `   ⚡ Energy usage: ${overallMetrics.overallEnergy.toFixed(2)} Wh`
    );
  });

  // Log overall totals
  console.log("🌎 --- Overall Environmental Totals ---");
  console.log(`📊 Overall queries: ${overallMetrics.overallQueries}`);
  console.log(`💧 Water usage: ${overallMetrics.overallWater.toFixed(2)} ml`);
  console.log(
    `🌫️ CO₂ emissions: ${overallMetrics.overallCO2.toFixed(2)} units`
  );
  console.log(`⚡ Energy usage: ${overallMetrics.overallEnergy.toFixed(2)} Wh`);

  // Log ChatGPT Usage per Month
  console.log("\n📅 --- Monthly ChatGPT Usage ---");
  Object.keys(usageByMonth)
    .sort()
    .forEach((month) => {
      console.log(`📆 ${month}: ${usageByMonth[month]} queries`);
    });

  // Log Top 3 Months Environmental Impact
  console.log("\n📅 --- Top 3 Months Environmental Impact ---");
  Object.keys(topMonthsImpact).forEach((month) => {
    console.log(`📆 ${month}:`);
    console.log(`   🔢 Total queries: ${topMonthsImpact[month].totalQueries}`);
    console.log(`   💧 Water usage: ${topMonthsImpact[month].totalWater} ml`);
    console.log(
      `   🌫️ CO₂ emissions: ${topMonthsImpact[month].totalCO2} units`
    );
    console.log(`   ⚡ Energy usage: ${topMonthsImpact[month].totalEnergy} Wh`);
  });
};
