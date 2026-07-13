"use client";
import Image from "next/image";
import countDownBg from "../../public/images/countDownTimer.webp";
import { Ref, useEffect, useState } from "react";
import { AlarmClock } from "lucide-react";
import { useIsGameStart } from "@/store/game-store";

type CountDownTimerProps = {
  ref: Ref<HTMLSpanElement>;
};

export default function CountDownTimer({ ref }: CountDownTimerProps) {
  const [timer, setTimer] = useState("00:00:00");
  const isGameStart = useIsGameStart();
  useEffect(() => {
    if (!isGameStart) return;
    const formatTimer = (time: number, reset: number) => {
      if (time >= reset) {
        return `00`;
      }
      return `${time}`.padStart(2, "0");
    };
    const timerId = setInterval(() => {
      setTimer((prev) => {
        const time = prev.split(":");
        const seconds = parseInt(time[2]) + 1;
        const minutes =
          seconds === 60 ? parseInt(time[1]) + 1 : parseInt(time[1]);
        const hours =
          minutes === 60 ? parseInt(time[0]) + 1 : parseInt(time[0]);
        const formatSeconds = formatTimer(seconds, 60);
        const formatMinutes = formatTimer(minutes, 60);
        const formatHours = formatTimer(hours, 24);
        return `${formatHours}:${formatMinutes}:${formatSeconds}`;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isGameStart]);

  return (
    <section className="relative h-full w-full overflow-hidden rounded-xl border-2 border-purple-500">
      <Image
        preload={true}
        src={countDownBg}
        className="h-full w-full"
        alt="countdown timer background"
      />
      <div className="absolute top-0 right-0 z-2 flex h-full basis-[45%] items-center justify-center bg-black/60 p-2">
        <AlarmClock className="text-purple-400" size={40} />
        <span
          ref={ref}
          className="ml-2 text-lg font-bold text-purple-400 md:text-xl lg:text-2xl"
        >
          {timer}
        </span>
      </div>
    </section>
  );
}
