
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  const apiKey = (import.meta as any).env?.VITE_API_KEY || (process as any).env?.VITE_API_KEY || (process as any).env?.API_KEY;
  if (!apiKey) return null;
  
  try {
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    return null;
  }
};

export const NESTOR_AVATAR_PROMPT = `
Design a minimal, futuristic robotic avatar named Nestor for a B2B data intelligence company.
Style: Non-human, robotic or synthetic, calm, neutral, professional.
Abstract geometric face structure. Metallic surface, subtle indigo glowing accent.
Palette: Graphite, charcoal, soft white, muted indigo.
"A silent system analyst observing data flows."
`;

const CACHE_KEY = 'labelnest_nestor_avatar_v2';

const DEFAULT_AVATAR = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#0F172A"/>
  <circle cx="200" cy="200" r="140" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <path d="M160 180 L240 180 L240 220 L160 220 Z" fill="#1E293B" stroke="#4F46E5" stroke-width="3" stroke-linejoin="round"/>
  <rect x="185" y="195" width="30" height="10" rx="2" fill="#4F46E5">
    <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
  </rect>
</svg>
`)}`;

export async function generateNestorAvatar(): Promise<string | null> {
  try {
    const cachedAvatar = sessionStorage.getItem(CACHE_KEY);
    if (cachedAvatar) return cachedAvatar;
  } catch (e) {}

  const ai = getAI();
  if (!ai) return DEFAULT_AVATAR;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: NESTOR_AVATAR_PROMPT }] },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Image = `data:image/png;base64,${part.inlineData.data}`;
        try { sessionStorage.setItem(CACHE_KEY, base64Image); } catch (e) {}
        return base64Image;
      }
    }
    return DEFAULT_AVATAR;
  } catch (error) {
    console.warn("Avatar Gen failed, using default:", error);
    return DEFAULT_AVATAR;
  }
}
