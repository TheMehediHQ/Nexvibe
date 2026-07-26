"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { isDeadlinePassed } from "@/lib/jobs";

interface CountdownTimerProps {
  deadline?: string;
}

export default function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [days, setDays] = useState<number | null>(null);
  const [hours, setHours] = useState<number | null>(null);

  useEffect(() => {
    if (!deadline) return;

    const updateCountdown = () => {
      const deadlineDate = new Date(deadline);
      if (isNaN(deadlineDate.getTime())) return;

      const diff = deadlineDate.getTime() - Date.now();
      if (diff <= 0) {
        setDays(0);
        setHours(0);
        return;
      }

      setDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const deadlinePassed = isDeadlinePassed(deadline);

  if (!deadline || deadlinePassed) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <Clock size={16} className="text-blue-500" />
      <span>
        Applications close in{" "}
        <span className="font-semibold text-white">
          {days !== null && days > 0
            ? `${days} day${days !== 1 ? "s" : ""}`
            : days === 0
            ? "today"
            : "soon"}
          {hours !== null && hours > 0 && days !== null && days > 0
            ? `, ${hours} hour${hours !== 1 ? "s" : ""}`
            : ""}
        </span>
      </span>
    </div>
  );
}