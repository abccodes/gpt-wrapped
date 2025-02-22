export const logJsonPreview = (jsonData: any): void => {
  const jsonString = JSON.stringify(jsonData, null, 2);
  const jsonLines = jsonString.split("\n");

  console.log("\n--- First 300 lines of conversations.json ---");
  jsonLines.slice(0, 100).forEach((line, index) => {
    console.log(`${index + 1}: ${line}`);
  });
  console.log("--- End of Output ---\n");
};
