const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
// let googleAPIKey = process.env.GOOGLE_API_KEY;
let googleAPIKey = "*****************";

const genAI = new GoogleGenerativeAI(googleAPIKey);

async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const newLine = "\n";
  
  // print the response
  console.log(`${newLine}Response from GEMINI-PRO :  ${text}`);
}

// Get the input prompt from the user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your prompt: ', (input) => {
  run(input);
  readline.close();
});

// const prompt = "The quick brown fox jumps over the lazy dog.";
// run(prompt);

