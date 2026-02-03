
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const NESTOR_AVATAR_PROMPT = `
Design a minimal, futuristic robotic avatar named Nestor for a B2B data intelligence company.
The avatar represents system intelligence, data integrity, and analytical thinking.
Style: Non-human, robotic or synthetic, calm, neutral, professional.
No facial expressions or emotions. No smile, no eyes with personality.
Abstract or semi-abstract face structure. Feels like an analyst system, not a companion bot.
Visual: Clean geometric forms, smooth metallic surface, subtle indigo glowing accent.
Palette: Graphite, charcoal, soft white, muted indigo.
Composition: Centered head/upper-core framing.
Background: Very dark neutral background.
"A silent system analyst observing data flows."
`;

const CACHE_KEY = 'labelnest_nestor_avatar';

/**
 * High-fidelity SVG Fallback.
 * This ensures that even if the AI generation fails due to quota limits,
 * the application maintains its professional, futuristic aesthetic.
 */
const DEFAULT_AVATAR = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#0F172A"/>
  <circle cx="200" cy="200" r="140" fill="#1E293B" stroke="#334155" stroke-width="1"/>
  <circle cx="200" cy="200" r="110" fill="#0F172A" stroke="#4F46E5" stroke-width="0.5" opacity="0.3"/>
  <path d="M160 180 L240 180 L240 220 L160 220 Z" fill="#1E293B" stroke="#4F46E5" stroke-width="3" stroke-linejoin="round"/>
  <rect x="185" y="195" width="30" height="10" rx="2" fill="#4F46E5">
    <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
  </rect>
  <circle cx="200" cy="200" r="160" stroke="#4F46E5" stroke-width="1" stroke-dasharray="8 16" opacity="0.1">
    <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="40s" repeatCount="indefinite" />
  </circle>
  <path d="M200 40 L200 70 M200 330 L200 360 M40 200 L70 200 M330 200 L360 200" stroke="#4F46E5" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
</svg>
`)}`;

export async function generateNestorAvatar(): Promise<string | null> {
  // 1. Check persistent cache (sessionStorage) to minimize API pressure
  try {
    const cachedAvatar = sessionStorage.getItem(CACHE_KEY);
    if (cachedAvatar) {
      return cachedAvatar;
    }
  } catch (e) {
    console.warn("Storage access failed:", e);
  }

  // 2. Attempt AI Generation
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: NESTOR_AVATAR_PROMPT }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Image = `data:image/png;base64,${part.inlineData.data}`;
        
        // 3. Update cache on success
        try {
          sessionStorage.setItem(CACHE_KEY, base64Image);
        } catch (e) {
          console.warn("Failed to cache avatar:", e);
        }
        
        return base64Image;
      }
    }
    
    // Fallback if structure is unexpected
    return DEFAULT_AVATAR;

  } catch (error: any) {
    // 4. Graceful Error Handling
    if (error?.message?.includes('429') || error?.status === 429) {
      // Specifically log that we are using a fallback due to quota
      console.warn("Nestor Avatar: API Rate limit reached (429). Using system-designed SVG fallback.");
    } else {
      console.error("Nestor Avatar Generation Failed:", error);
    }
    
    // Always return a high-quality visual to prevent broken UI
    return DEFAULT_AVATAR;
  }
}
