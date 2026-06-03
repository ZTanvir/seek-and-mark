"use client";
import Image from "next/image";
import countDownBg from "../../public/images/countDownTimer.webp";
import { useEffect, useState } from "react";
import { AlarmClock } from "lucide-react";
export default function CountDownTimer() {
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
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
    }, 1 / 100000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="relative w-fit border-2 border-purple-500 rounded-xl overflow-hidden">
      <Image
        preload={true}
        src={countDownBg}
        alt="countdown timer background"
      />
      <div className="absolute z-2 top-0 right-0 bg-black/60 w-[45%] h-full flex justify-center items-center">
        <AlarmClock className="text-purple-400" size={40} />
        <span className="text-purple-400 font-bold text-2xl ml-2">{timer}</span>
      </div>
    </section>
  );
}
