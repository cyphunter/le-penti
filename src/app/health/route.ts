import { NextResponse } from "next/server";

// Health check minimal — utilisé par l'uptime monitoring (BetterStack / UptimeRobot).
// Doit rester ultra-léger : aucune dépendance externe, aucun accès DB.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      site: "lepenti",
      time: new Date().toISOString(),
    },
    {
      headers: { "Cache-Control": "no-store" },
    },
  );
}
