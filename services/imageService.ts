
/**
 * LabelNest Identity Service - DETERMINISTIC ASSET PROTOCOL
 * 
 * HINT FOR NEW EMPLOYEES:
 * 1. Identify the 'id' used in constants.tsx (e.g., 'john-doe').
 * 2. Upload the portrait to the project root named as '[id].png'.
 * 3. The system will automatically detect and prioritize this file.
 */

const REAL_PORTRAITS: Record<string, string> = {
  // Leadership
  'ankit-kumar-suman': 'ankit-kumar-suman.png',
  
  // Delivery & Programs
  'muskaan-grover': 'muskaan-grover.png',
  'himani-bhatt': 'himani-bhatt.png',
  'shubham-singh': 'shubham-singh.png',
  
  // People & Culture (Existing files)
  'srishti-shiyal': 'srishti_shiyal.png',
  'suganya-gautam': 'suganya_gautam.png',
  'sumedha-pandey': 'sumedha_pandey.png',
  
  // Data & AI Systems
  'phalachandra-udupa': 'phalachandra-udupa.png',
  'suhas-bhat': 'suhas-bhat.png',
  
  // Domain Intelligence
  'prajwal-pb': 'prajwal-pb.png',
  'maybin-k-uthuppan': 'maybin-k-uthuppan.png',
  'robin-joshi': 'robin-joshi.png',
};

/**
 * Returns the mapped image path if available.
 * If no image is mapped, returns null to trigger initials fallback.
 */
export function getTeamMemberAvatar(id: string, department: string): string | null {
  if (REAL_PORTRAITS[id]) {
    return REAL_PORTRAITS[id];
  }
  return null;
}

/**
 * Nestor remains the "System Intelligence" mascot.
 */
const NESTOR_LOCKED_AVATAR = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="180" fill="#080C14"/>
  <path d="M200 60 C140 60 110 100 110 170 C110 230 140 290 200 320 C260 290 290 230 290 170 C290 100 260 60 200 60Z" fill="#1A1F26"/>
  <rect x="145" y="155" width="40" height="6" rx="1" fill="#00D1FF"></rect>
  <rect x="215" y="155" width="40" height="6" rx="1" fill="#00D1FF"></rect>
  <path d="M165 230 Q200 270 235 230" stroke="#00D1FF" stroke-width="6" stroke-linecap="round">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
  </path>
</svg>
`)}`;

export async function generateNestorAvatar(): Promise<string | null> {
  return NESTOR_LOCKED_AVATAR;
}
