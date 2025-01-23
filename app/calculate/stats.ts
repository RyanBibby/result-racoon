type Result = {
  "total": number, "firstTime": number, "25": string, "50": string, "100": string, "250": string, "500": string
};

export default function ProcessResults(results : Array<Array<string>>) : Result {

  const total = results.length;
  const firstTime = results.filter((runner) => runner[1] === "1").length
  const twentyFive =  results.filter((runner) => runner[1] === "25").map(runner => runner[0]).join(", ")  || "None"
  const fifty =  results.filter((runner) => runner[1] === "50").map(runner => runner[0]).join(", ") || "None"
  const oneHundred =  results.filter((runner) => runner[1] === "100").map(runner => runner[0]).join(", ") || "None"
  const twoHundredAndFifty =  results.filter((runner) => runner[1] === "250").map(runner => runner[0]).join(", ") || "None"
  const fiveHundred =  results.filter((runner) => runner[1] === "500").map(runner => runner[0]).join(", ") || "None"

  return { "total": total, "firstTime": firstTime, "25": twentyFive, "50": fifty, "100": oneHundred, "250": twoHundredAndFifty, "500": fiveHundred }
}