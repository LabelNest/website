
/**
 * LabelNest System Analytics Service
 * Manages visitor identity and unique tracking protocols.
 */

const UID_KEY = 'labelnest_uid';

export interface VisitorIdentity {
  uid: string;
  isNew: boolean;
  firstSeen: string;
}

export const analyticsProtocol = {
  /**
   * Initializes or retrieves the visitor's unique identifier.
   */
  getIdentity: (): VisitorIdentity => {
    let uid = localStorage.getItem(UID_KEY);
    let isNew = false;
    let firstSeen = localStorage.getItem('labelnest_first_seen');

    if (!uid) {
      uid = `LN-USR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      firstSeen = new Date().toISOString();
      localStorage.setItem(UID_KEY, uid);
      localStorage.setItem('labelnest_first_seen', firstSeen!);
      isNew = true;
    }

    return {
      uid,
      isNew,
      firstSeen: firstSeen || new Date().toISOString()
    };
  },

  /**
   * Captures the current environmental context for BigQuery ingestion.
   */
  getContext: async () => {
    let geo = { latitude: null, longitude: null };
    
    try {
      if ('geolocation' in navigator) {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 3000 });
        });
        geo = {
          latitude: position.coords.latitude as any,
          longitude: position.coords.longitude as any
        };
      }
    } catch (e) {
      // Geolocation denied or unavailable - proceed with nulls
    }

    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'direct',
      ...geo
    };
  }
};
