import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with your API key
const genAI = new GoogleGenerativeAI("AIzaSyAmq9sG6a2SBsQNnIZmArAk6JLS-dahLWk");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const result = await model.generateContent("hii");
  const response = await result.response;
  const text = response.text();

  console.log(text);
}

main().catch(console.error);
