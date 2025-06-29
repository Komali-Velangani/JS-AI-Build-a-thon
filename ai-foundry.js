import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import dotenv from 'dotenv';

dotenv.config();

  const client = new ModelClient(
  process.env.AZURE_INFERENCE_SDK_ENDPOINT ?? "https://komal-mbtlnead-eastus2.services.ai.azure.com/models", new AzureKeyCredential(process.env.AZURE_INFERENCE_SDK_KEY ?? "D747buaeNVzGAnOtXPJCIqMShbCEO7M4G2dwT9jOD4UNtAXW6Ob3JQQJ99BFACHYHv6XJ3w3AAAAACOGN9Dm"));

var messages = [
  { role: "system", content: "You are an helpful assistant" },
  { role: "user", content: "What are 3 things to see in Seattle?" },
];

var response = await client.path("chat/completions").post({
  body: {
    messages: messages,
    max_tokens: 4096,
      temperature: 1,
      top_p: 1,
      model: "gpt-4.1",
  },
});

console.log(JSON.stringify(response));