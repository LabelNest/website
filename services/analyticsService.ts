
/**
 * LabelNest System Analytics Service - DECOMMISSIONED
 * This service has been stripped to comply with zero-tracking protocols.
 */

export interface VisitorIdentity {
  uid: string;
  isNew: boolean;
  firstSeen: string;
}

export const analyticsProtocol = {
  getIdentity: (): VisitorIdentity => {
    return {
      uid: 'ANONYMOUS',
      isNew: false,
      firstSeen: new Date().toISOString()
    };
  },
  getContext: async () => {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'direct'
    };
  }
};
