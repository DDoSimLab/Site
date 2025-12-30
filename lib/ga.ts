import ReactGA from "react-ga4";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const isProduction =
  process.env.NODE_ENV === "production" && Boolean(GA_ID);

export function initGA() {
  if (!isProduction) return;

  ReactGA.initialize(GA_ID as string, {
    testMode: false,
  });
}

export function trackView(path: string) {
  if (!isProduction) return;
  ReactGA.send({ hitType: "pageView", page: path });
}

interface TrackEventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export function trackEvent(params: TrackEventParams) {
  if (!isProduction) return;
  ReactGA.event(params);
}
