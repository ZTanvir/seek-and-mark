"use client";
import Image from "next/image";
import countDownBg from "../../public/images/countDownTimer.webp";
import { useEffect, useState } from "react";
import { AlarmClock } from "lucide-react";
export default function CountDownTimer() {
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
    const timerId = setInterval(() => {}, 1000);
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
