
import { GoogleGenAI } from "@google/genai";
import { NESTOR_SYSTEM_INSTRUCTION } from "../constants";

const getAI = () => {
  try {
    // Correctly check for VITE_ prefix required by browser-side environments like Vite/Vercel
    const apiKey = (import.meta as any).env?.VITE_API_KEY || (process as any).env?.VITE_API_KEY || (process as any).env?.API_KEY;
    
    if (!apiKey || apiKey.length < 5) {
      console.warn("Nestor Protocol Warning: API Key protocol not detected.");
      return null;
    }
    
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("Nestor Protocol Error:", e);
    return null;
  }
};

export async function chatWithNestor(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
  const ai = getAI();
  
  if (!ai) {
    return "System Core Status: OFFLINE. (The VITE_API_KEY protocol is missing. Please verify environment settings and redeploy).";
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

    return response.text;
  } catch (error) {
    console.error("Nestor Request Error:", error);
    return "I am experiencing a communication latency with the main core. Please check your network or try again later.";
  }
}
