
/**
 * LabelNest Identity Service - SYNCHRONIZED DEPARTMENTAL AVATAR PROTOCOL
 * Generates unique, smiling robotic assets for each specialized department.
 */

const COLORS = {
  LEADERSHIP: { base: '#080C14', accent: '#FFD700', bg: '#1A1F26' },
  DELIVERY: { base: '#0F172A', accent: '#6366F1', bg: '#1E293B' },
  PEOPLE: { base: '#0D1117', accent: '#EC4899', bg: '#1E1B4B' },
  DATA: { base: '#020617', accent: '#00D1FF', bg: '#0F172A' },
  DOMAIN: { base: '#064E3B', accent: '#10B981', bg: '#064E3B' },
};

const THOR_PROTOCOL = `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#080C14"/>
  <path d="M200 60 L120 120 L120 280 L200 340 L280 280 L280 120 Z" fill="#1A1F26" stroke="#FFD700" stroke-width="4"/>
  <path d="M200 60 V140 M120 120 L160 160 M280 120 L240 160" stroke="#FFD700" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
  <circle cx="200" cy="210" r="40" stroke="#FFD700" stroke-width="2" fill="#FFD700" fill-opacity="0.1"/>
  <path d="M160 230 Q200 270 240 230" stroke="#FFD700" stroke-width="4" stroke-linecap="round">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
  </path>
</svg>`;

function generateSmilingDepartmentAvatar(dept: string): string {
  const theme = dept.includes('Leadership') ? COLORS.LEADERSHIP :
                dept.includes('Delivery') ? COLORS.DELIVERY :
                dept.includes('People') ? COLORS.PEOPLE :
                dept.includes('Data') ? COLORS.DATA : COLORS.DOMAIN;

  return `
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="${theme.base}"/>
    
    <!-- Unified Face Structure -->
    <path d="M120 120 L120 280 L200 340 L280 280 L280 120 L200 60 Z" fill="${theme.bg}" stroke="${theme.accent}" stroke-width="2" opacity="0.9"/>
    
    <!-- Constant Eyes -->
    <rect x="155" y="160" width="25" height="4" rx="2" fill="${theme.accent}"/>
    <rect x="220" y="160" width="25" height="4" rx="2" fill="${theme.accent}"/>
    
    <!-- Constant Smiling Expression -->
    <path d="M165 235 Q200 270 235 235" stroke="${theme.accent}" stroke-width="5" stroke-linecap="round" opacity="0.8">
      <animate attributeName="stroke-width" values="4;6;4" dur="2s" repeatCount="indefinite" />
    </path>

    <!-- Dept-Specific Badge Mark -->
    <circle cx="200" cy="90" r="10" stroke="${theme.accent}" stroke-width="1" fill="${theme.accent}" fill-opacity="0.1"/>
    
    <rect x="0" y="0" width="400" height="400" stroke="${theme.accent}" stroke-width="0.5" opacity="0.1"/>
  </svg>`;
}

export function getTeamMemberAvatar(id: string, department: string): string {
  if (id === 'ankit-kumar-suman') {
    return `data:image/svg+xml;base64,${btoa(THOR_PROTOCOL)}`;
  }
  return `data:image/svg+xml;base64,${btoa(generateSmilingDepartmentAvatar(department))}`;
}

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
