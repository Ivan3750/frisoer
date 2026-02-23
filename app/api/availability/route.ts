import { NextRequest, NextResponse } from "next/server";

// Mock data: в реальному проєкті тут буде база або зовнішній календар
const availableTimes: Record<string, string[]> = {
  "2026-02-24": ["09:00", "10:00", "11:00", "14:00"],
  "2026-02-25": ["10:00", "12:00", "15:00"],
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Missing date" }, { status: 400 });
  }

  const times = availableTimes[date] || [];
  return NextResponse.json({ times });
}