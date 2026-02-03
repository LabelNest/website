
import { GoogleGenAI } from "@google/genai";
import { NESTOR_SYSTEM_INSTRUCTION } from "../constants";

// Correctly initialize GoogleGenAI following mandatory guidelines
const getAI = () => {
  if (!process.env.API_KEY) {
    console.warn("Nestor Protocol Warning: API_KEY protocol not detected in environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export async function chatWithNestor(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
  const ai = getAI();
  
  if (!ai) {
    return "System Core Status: OFFLINE. (The API_KEY protocol is missing. Please verify environment settings and redeploy).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: NESTOR_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    // Directly access text property from GenerateContentResponse as per guidelines
    return response.text;
  } catch (error) {
    console.error("Nestor Request Error:", error);
    return "I am experiencing a communication latency with the main core. Please check your network or try again later.";
  }
}