"use client";
import { useToastContext } from "@/hooks/context";
import Toast from "./toast";
export default function ToastContainer() {
  const { toasts, removeToast } = useToastContext();
  return (
    <div className="absolute top-[15%] right-0 z-2 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          msgType={toast.msgType}
          removeToast={removeToast}
        />
      ))}
    </div>
  );
}
