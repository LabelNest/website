
/**
 * LabelNest Identity Service - DETERMINISTIC AVATAR PROTOCOL
 * Generates fixed, unique facial brand assets for all personnel.
 */

const COLORS = {
  LEADERSHIP: { base: '#080C14', accent: '#FFD700', bg: '#1A1F26' },
  DELIVERY: { base: '#0F172A', accent: '#6366F1', bg: '#1E293B' },
  PEOPLE: { base: '#0D1117', accent: '#EC4899', bg: '#1E1B4B' },
  DATA: { base: '#020617', accent: '#00D1FF', bg: '#0F172A' },
  DOMAIN: { base: '#064E3B', accent: '#10B981', bg: '#064E3B' },
};

function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

const THOR_PROTOCOL = `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#080C14"/>
  <path d="M200 60 L120 120 L120 280 L200 340 L280 280 L280 120 Z" fill="#1A1F26" stroke="#FFD700" stroke-width="4"/>
  <path d="M200 60 V140 M120 120 L160 160 M280 120 L240 160" stroke="#FFD700" stroke-width="6" stroke-linecap="round" opacity="0.8">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
  </path>
  <circle cx="200" cy="210" r="40" stroke="#FFD700" stroke-width="2" fill="#FFD700" fill-opacity="0.1"/>
  <path d="M180 210 H220 M200 190 V230" stroke="#FFD700" stroke-width="3" stroke-linecap="round"/>
  <path d="M150 160 Q200 130 250 160" stroke="#FFD700" stroke-width="1" opacity="0.3"/>
</svg>`;

function generateFaceSVG(id: string, dept: string): string {
  const hash = getHash(id);
  const theme = dept.includes('Leadership') ? COLORS.LEADERSHIP :
                dept.includes('Delivery') ? COLORS.DELIVERY :
                dept.includes('People') ? COLORS.PEOPLE :
                dept.includes('Data') ? COLORS.DATA : COLORS.DOMAIN;

  // Eye styles
  const eyeVariants = [
    `<rect x="150" y="170" width="25" height="4" rx="1" fill="${theme.accent}"/> <rect x="225" y="170" width="25" height="4" rx="1" fill="${theme.accent}"/>`,
    `<circle cx="165" cy="175" r="5" fill="${theme.accent}"/> <circle cx="235" cy="175" r="5" fill="${theme.accent}"/>`,
    `<path d="M145 175 Q165 160 185 175" stroke="${theme.accent}" stroke-width="3" fill="none"/> <path d="M215 175 Q235 160 255 175" stroke="${theme.accent}" stroke-width="3" fill="none"/>`,
  ];

  // Jaw/Face structure
  const faceVariants = [
    `<path d="M120 150 Q120 320 200 340 Q280 320 280 150" fill="${theme.bg}" stroke="${theme.accent}" stroke-width="1"/>`,
    `<path d="M140 120 L120 200 L200 320 L280 200 L260 120 Z" fill="${theme.bg}" stroke="${theme.accent}" stroke-width="1"/>`,
    `<circle cx="200" cy="200" r="120" fill="${theme.bg}" stroke="${theme.accent}" stroke-width="1"/>`,
  ];

  // Feature detail (deterministic circuitry/marks)
  const detailVariants = [
    `<path d="M180 240 H220" stroke="${theme.accent}" stroke-width="2" stroke-linecap="round"/>`,
    `<path d="M200 220 V260" stroke="${theme.accent}" stroke-width="1" opacity="0.5"/>`,
    `<circle cx="200" cy="245" r="3" fill="${theme.accent}"/>`,
  ];

  return `
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="${theme.base}"/>
    <g opacity="0.8">
      ${faceVariants[hash % faceVariants.length]}
      ${eyeVariants[hash % eyeVariants.length]}
      ${detailVariants[hash % detailVariants.length]}
    </g>
    <rect x="0" y="0" width="400" height="400" stroke="${theme.accent}" stroke-width="0.5" opacity="0.1"/>
  </svg>`;
}

export function getTeamMemberAvatar(id: string, department: string): string {
  if (id === 'ankit-kumar-suman') {
    return `data:image/svg+xml;base64,${btoa(THOR_PROTOCOL)}`;
  }
  return `data:image/svg+xml;base64,${btoa(generateFaceSVG(id, department))}`;
}

const NESTOR_LOCKED_AVATAR = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="180" fill="#080C14"/>
  <path d="M200 60 C140 60 110 100 110 170 C110 230 140 290 200 320 C260 290 290 230 290 170 C290 100 260 60 200 60Z" fill="#1A1F26"/>
  <rect x="145" y="155" width="40" height="6" rx="1" fill="#00D1FF"><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" /></rect>
  <rect x="215" y="155" width="40" height="6" rx="1" fill="#00D1FF"><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" /></rect>
</svg>
`)}`;

export async function generateNestorAvatar(): Promise<string | null> {
  return NESTOR_LOCKED_AVATAR;
}
