
import { GoogleGenAI } from "@google/genai";
import { NESTOR_SYSTEM_INSTRUCTION } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function chatWithNestor(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
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

    return response.text;
  } catch (error) {
    console.error("Nestor Error:", error);
    return "I'm having trouble connecting to the system core. Please contact contact@labelnest.in for direct assistance.";
  }
}
