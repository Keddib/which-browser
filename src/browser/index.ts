import { BrowserType } from "../types";

function isSafari(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    /Version\/([0-9._]+).*Safari/.test(navigator.userAgent) // Source: https://github.com/DamonOehlman/detect-browser/blob/master/src/index.ts
  );
}

function isArc(): boolean {
  return (
    typeof document !== 'undefined' &&
    getComputedStyle(document.body).getPropertyValue('--arc-palette-focus') !==
      ''
  );
}


export function whichBrowser(): BrowserType {
  if (typeof navigator === 'undefined') return BrowserType.Browser;
  const ua = navigator.userAgent.toLowerCase();
  // @ts-ignore
  if (navigator.brave?.isBrave) return BrowserType.Brave;
  else if (ua.indexOf('edg/') > -1) return BrowserType.Edge;
  else if (ua.indexOf('op') > -1) return BrowserType.Opera;
  else if (isArc()) return BrowserType.Arc;
  else if (ua.indexOf('chrome') > -1) return BrowserType.Chrome;
  else if (ua.indexOf('firefox') > -1) return BrowserType.Firefox;
  else if (isSafari()) return BrowserType.Safari;
  return BrowserType.Browser;
}
