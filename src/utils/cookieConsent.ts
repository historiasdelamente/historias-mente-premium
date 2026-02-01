// Cookie Consent Utilities
// Manages conditional loading of tracking scripts based on user consent

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

const CONSENT_KEY = 'cookieConsent';
const CONSENT_VERSION = '1.0';

// Default preferences - only essential cookies enabled
export const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: '',
  version: CONSENT_VERSION,
};

// Get stored consent preferences
export const getStoredConsent = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as CookiePreferences;
      // Check if consent version matches
      if (parsed.version === CONSENT_VERSION) {
        return parsed;
      }
    }
    return null;
  } catch {
    return null;
  }
};

// Save consent preferences
export const saveConsent = (preferences: Omit<CookiePreferences, 'timestamp' | 'version'>): CookiePreferences => {
  const fullPreferences: CookiePreferences = {
    ...preferences,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(fullPreferences));
  return fullPreferences;
};

// Check if consent has been given
export const hasConsentBeenGiven = (): boolean => {
  return getStoredConsent() !== null;
};

// Load Google Analytics
export const loadGoogleAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  if ((window as any).gtag) return; // Already loaded

  const gaId = 'G-QVS3G2NREH';
  
  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(arguments);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId);
};

// Load Meta Pixel
export const loadMetaPixel = (): void => {
  if (typeof window === 'undefined') return;
  if ((window as any).fbq) return; // Already loaded

  const pixelId = '1248183170496583';

  // Meta Pixel base code
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  (window as any).fbq('init', pixelId);
  (window as any).fbq('track', 'PageView');
};

// Load TikTok Pixel
export const loadTikTokPixel = (): void => {
  if (typeof window === 'undefined') return;
  if ((window as any).ttq) return; // Already loaded

  const pixelId = 'D3CVPS3C77U7D8VS3Q90';

  // TikTok Pixel base code
  (function(w: any, d: any, t: string) {
    w.TiktokAnalyticsObject = t;
    var ttq = w[t] = w[t] || [];
    ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'];
    ttq.setAndDefer = function(t: any, e: string) {
      t[e] = function() {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (var i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(ttq, ttq.methods[i]);
    }
    ttq.instance = function(t: string) {
      var e = ttq._i[t] || [];
      for (var n = 0; n < ttq.methods.length; n++) {
        ttq.setAndDefer(e, ttq.methods[n]);
      }
      return e;
    };
    ttq.load = function(e: string, n?: any) {
      var r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      var o = n && n.partner;
      ttq._i = ttq._i || {};
      ttq._i[e] = [];
      ttq._i[e]._u = r;
      ttq._t = ttq._t || {};
      ttq._t[e] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[e] = n || {};
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = r + '?sdkid=' + e + '&lib=' + t;
      var a = document.getElementsByTagName('script')[0];
      a.parentNode?.insertBefore(s, a);
    };

    ttq.load(pixelId);
    ttq.page();
  })(window, document, 'ttq');
};

// Load all analytics scripts
export const loadAnalyticsScripts = (): void => {
  loadGoogleAnalytics();
};

// Load all marketing scripts
export const loadMarketingScripts = (): void => {
  loadMetaPixel();
  loadTikTokPixel();
};

// Load scripts based on stored consent
export const loadConsentedScripts = (): void => {
  const consent = getStoredConsent();
  if (!consent) return;

  if (consent.analytics) {
    loadAnalyticsScripts();
  }

  if (consent.marketing) {
    loadMarketingScripts();
  }
};

// Accept all cookies
export const acceptAllCookies = (): CookiePreferences => {
  const preferences = saveConsent({
    essential: true,
    analytics: true,
    marketing: true,
  });
  loadAnalyticsScripts();
  loadMarketingScripts();
  return preferences;
};

// Accept only essential cookies
export const acceptEssentialOnly = (): CookiePreferences => {
  return saveConsent({
    essential: true,
    analytics: false,
    marketing: false,
  });
};

// Save custom preferences
export const saveCustomPreferences = (analytics: boolean, marketing: boolean): CookiePreferences => {
  const preferences = saveConsent({
    essential: true,
    analytics,
    marketing,
  });
  
  if (analytics) {
    loadAnalyticsScripts();
  }
  
  if (marketing) {
    loadMarketingScripts();
  }
  
  return preferences;
};
