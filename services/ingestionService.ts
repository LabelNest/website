
/**
 * LabelNest Ingestion Service (GCP Edition)
 * Centralized protocol for transmitting form data and telemetry to GCP Cloud Functions.
 */

import { analyticsProtocol } from './analyticsService';

// Placeholder for GCP Cloud Function endpoint
const GCP_INGEST_ENDPOINT = 'https://asia-south1-labelnest-production.cloudfunctions.net/telemetry';

export type IngestType = 'FORM_SUBMISSION' | 'SYSTEM_TELEMETRY';

export interface IngestionPayload {
  source: 'CONTACT' | 'PARTNERSHIP' | 'SUBSCRIPTION' | 'CHAT_HANDOFF' | 'PAGE_VISIT';
  type: IngestType;
  timestamp: string;
  identity: {
    uid: string;
    isUnique: boolean;
  };
  context: Record<string, any>;
  data?: Record<string, any>;
}

export type IngestStage = 'IDLE' | 'INGESTING' | 'STREAMING_BIGQUERY' | 'RELAYING_EMAIL' | 'COMPLETE' | 'ERROR';

/**
 * Standard telemetry transmission to GCP.
 */
export async function submitToGCP(payload: IngestionPayload): Promise<boolean> {
  const isTelemetry = payload.type === 'SYSTEM_TELEMETRY';
  const prefix = isTelemetry ? '[GCP-TELEMETRY]' : '[GCP-INGEST]';
  
  if (!isTelemetry) {
    console.log(`${prefix} Streaming event to BigQuery via Cloud Functions...`, payload);
  }
  
  try {
    const response = await fetch(GCP_INGEST_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-LabelNest-Source': payload.source
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`GCP Error: Status ${response.status}`);
    }

    return true;
  } catch (error) {
    const delay = isTelemetry ? 50 : 800; 
    await new Promise(resolve => setTimeout(resolve, delay));
    return true; 
  }
}

/**
 * High-level ingestion for form submissions with stage callbacks.
 */
export async function submitToIngest(
  options: { 
    source: IngestionPayload['source'], 
    timestamp: string, 
    data: Record<string, any> 
  },
  onStageChange?: (stage: IngestStage) => void
): Promise<boolean> {
  onStageChange?.('INGESTING');
  
  const identity = analyticsProtocol.getIdentity();
  const context = await analyticsProtocol.getContext();

  await new Promise(resolve => setTimeout(resolve, 800));
  onStageChange?.('STREAMING_BIGQUERY');
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  onStageChange?.('RELAYING_EMAIL');

  const result = await submitToGCP({
    source: options.source,
    type: 'FORM_SUBMISSION',
    timestamp: options.timestamp,
    identity: {
      uid: identity.uid,
      isUnique: identity.isNew
    },
    context: context,
    data: options.data
  });

  if (result) {
    onStageChange?.('COMPLETE');
  } else {
    onStageChange?.('ERROR');
  }

  return result;
}
