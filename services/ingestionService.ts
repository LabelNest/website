
/**
 * LabelNest Ingestion Service (EmailJS Edition)
 * Centralized protocol for transmitting form data via EmailJS.
 * TARGET: contact@labelnest.in
 */

const EMAILJS_SERVICE_ID = 'lni_form'; 
const EMAILJS_PUBLIC_KEY = 'iaohPHTZhQwZr5JG6';
const EMAILJS_TEMPLATE_ID = '1';

export type IngestType = 'general' | 'contact' | 'partnership' | 'subscription' | 'chat_handoff';

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
  type: IngestType;
}

export type IngestStage = 'IDLE' | 'SUBMITTING' | 'COMPLETE' | 'ERROR';

/**
 * Transmit form data directly to EmailJS REST API.
 */
export async function submitToEmailJS(payload: EmailPayload): Promise<boolean> {
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          name: payload.name,
          email: payload.email,
          message: payload.message,
          type: payload.type
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`EmailJS Protocol Error: ${errorText}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("EmailJS Connection Interrupted:", error);
    return false;
  }
}

/**
 * Unified ingestion for all website forms.
 */
export async function submitToIngest(
  options: { 
    name: string,
    email: string,
    message: string,
    type: IngestType 
  },
  onStageChange?: (stage: IngestStage) => void
): Promise<boolean> {
  onStageChange?.('SUBMITTING');
  
  // Artificial delay for high-end "system processing" feel
  await new Promise(resolve => setTimeout(resolve, 1200));

  const success = await submitToEmailJS({
    name: options.name,
    email: options.email,
    message: options.message,
    type: options.type
  });

  if (success) {
    onStageChange?.('COMPLETE');
    return true;
  } else {
    onStageChange?.('ERROR');
    return false;
  }
}

/**
 * Legacy GCP function shell (Decommissioned)
 */
export async function submitToGCP(payload: any): Promise<boolean> {
  return true; // No-op
}
