import { createClient } from "microcms-js-sdk";

const apiKeyName = "API_KEY";

const apiKey = process.env[apiKeyName];
if (typeof apiKey !== "string") {
  throw TypeError(`環境変数 ${apiKeyName} が存在しません。`);
}

export const microcmsClient = createClient({
  serviceDomain: "rinear",
  apiKey: apiKey
});
