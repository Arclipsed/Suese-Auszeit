// Needs useState and useEffect for client-side live open/closed time calculation
"use client";

import { useState, useEffect } from "react";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface DaySchedule {
  day: string;
  time: string;
  isClosed?: boolean;
}

const SCHEDULE: DaySchedule[] = [
  { day: "Montag", time: "Ruhetag", isClosed: true },
  { day: "Dienstag", time: "09:00 – 18:30 Uhr" },
  { day: "Mittwoch", time: "09:00 – 18:30 Uhr" },
  { day: "Donnerstag", time: "09:00 – 18:30 Uhr" },
  { day: "Freitag", time: "09:00 – 18:30 Uhr" },
  { day: "Samstag", time: "09:30 – 19:00 Uhr" },
  { day: "Sonntag", time: "09:30 – 19:00 Uhr" },
];

export default function LiveOpeningHoursCard() {
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const now = new Date();
    const day = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let open = false;
    if (day === 1) {
      // Monday: closed
      open = false;
    } else if (day >= 2 && day <= 5) {
      // Tue - Fri: 09:00 (540) to 18:30 (1110)
      open = currentMinutes >= 540 && currentMinutes < 1110;
    } else {
      // Sat & Sun: 09:30 (570) to 19:00 (1140)
      open = currentMinutes >= 570 && currentMinutes < 1140;
    }
    setIsOpenNow(open);
  }, []);

  return (
    <div className="flex flex-col rounded-3xl border border-white/10 bg-[#141217] p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Live Badge */}
      <div className="flex items-center justify-between pb-6 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-pink-400" />
          <h3 className="font-serif text-xl font-bold text-white">Öffnungszeiten</h3>
        </div>

        {isOpenNow !== null && (
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
              isOpenNow
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                : "bg-rose-500/15 border-rose-500/30 text-rose-400"
            }`}
          >
            {isOpenNow ? (
              <>
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Jetzt geöffnet</span>
              </>
            ) : (
              <>
                <span className="size-2 rounded-full bg-rose-400" />
                <span>Derzeit geschlossen</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Week Table */}
      <div className="space-y-3.5 pt-6">
        {SCHEDULE.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between text-sm py-1 border-b border-white/[0.03] last:border-0"
          >
            <span className="font-medium text-stone-300">{item.day}</span>
            <span
              className={
                item.isClosed
                  ? "text-stone-500 font-medium"
                  : "text-white font-semibold"
              }
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
