import { Conversation } from "../types/conversationTypes";

/**
 * Logs details about processed conversations and environmental impact.
 */
export const logResults = (
  conversations: Conversation[],
  queriesByModel: Record<string, number>,
  overallMetrics: {
    overallQueries: number;
    overallWater: number;
    overallCO2: number;
    overallEnergy: number;
  }
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
};
