"use client";
import { CheckCircle, CircleX, InfoIcon } from "lucide-react";
import type { Toast } from "@/types/components";
import { useEffect } from "react";

type ToastProps = {
  id: number;
  message: Toast["message"];
  msgType: Toast["msgType"];
  removeToast: (id: number) => void;
};

const iconMap = {
  warning: {
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    icon: InfoIcon,
  },
  error: {
    borderColor: "border-red-600",
    textColor: "text-red-600",
    icon: CircleX,
  },
  success: {
    borderColor: "border-lime-600",
    textColor: "text-lime-600",
    icon: CheckCircle,
  },
};

export default function Toast({
  id,
  message,
  msgType,
  removeToast,
}: ToastProps) {
  const IconComponent = iconMap[msgType].icon;
  useEffect(() => {
    setTimeout(() => {
      removeToast(id);
    }, 2000);
  }, [id, removeToast]);
  return (
    <div
      className={`w-[300px] border ${iconMap[msgType].borderColor} rounded-lg bg-black/80 p-4`}
    >
      <div className="flex items-center gap-3">
        <span>
          <IconComponent className={`${iconMap[msgType].textColor}`} />
        </span>
        <span className={`${iconMap[msgType].textColor} font-bold`}>
          {message}
        </span>
      </div>
    </div>
  );
}
