
import { GoogleGenAI } from "@google/genai";
import { NESTOR_SYSTEM_INSTRUCTION } from "../constants";

const getAI = () => {
  // Vite exposes environment variables via import.meta.env
  // We check for VITE_API_KEY as the primary source
  const apiKey = (import.meta as any).env?.VITE_API_KEY || (process as any).env?.VITE_API_KEY || (process as any).env?.API_KEY;
  
  if (!apiKey) {
    return null;
  }
  
  try {
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("AI Initialization Failed:", e);
    return null;
  }
};

export async function chatWithNestor(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const ai = getAI();
    if (!ai) {
      return "System Core Offline. Please ensure the VITE_API_KEY is configured in your deployment settings.";
    }

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
    return "I'm having trouble connecting to the system core. Please ensure the API_KEY protocol is initialized or contact contact@labelnest.in.";
  }
}
