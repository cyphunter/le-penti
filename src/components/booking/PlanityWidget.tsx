"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface PlanityWidgetProps {
  apiKey: string;
  primaryColor?: string;
}

declare global {
  interface Window {
    planity?: {
      key: string;
      primaryColor?: string;
      container?: HTMLElement | null;
      [key: string]: unknown;
    };
  }
}

export function PlanityWidget({ apiKey, primaryColor = "#B8763E" }: PlanityWidgetProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.planity = {
      key: apiKey,
      primaryColor,
      container: ref.current,
    };
  }, [apiKey, primaryColor]);

  return (
    <>
      <div
        id="planity-container"
        ref={ref}
        className="w-full min-h-[600px] rounded-sm bg-paper border border-line overflow-hidden"
      />
      <Script
        src="https://d2skjte8udjqxw.cloudfront.net/widget/production/polyfills.latest.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://d2skjte8udjqxw.cloudfront.net/widget/production/app.latest.js"
        strategy="afterInteractive"
      />
    </>
  );
}
