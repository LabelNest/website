
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  try {
    const apiKey = (import.meta as any).env?.VITE_API_KEY || (process as any).env?.VITE_API_KEY || (process as any).env?.API_KEY;
    if (!apiKey || apiKey.length < 5) return null;
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    return null;
  }
};

const DEFAULT_AVATAR = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#0F172A"/>
  <circle cx="200" cy="200" r="140" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <rect x="185" y="195" width="30" height="10" rx="2" fill="#4F46E5" />
</svg>
`)}`;

export async function generateNestorAvatar(): Promise<string | null> {
  const ai = getAI();
  if (!ai) return DEFAULT_AVATAR;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: "Futuristic robotic avatar icon, professional, minimal, indigo accents" }] },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return DEFAULT_AVATAR;
  } catch (error) {
    return DEFAULT_AVATAR;
  }
}
