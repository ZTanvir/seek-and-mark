"use client";
import { createContext, useState } from "react";
import type { Toast } from "@/types/components";

type ToastContextType = {
  toasts: Toast[];
  addToast: (message: string, toastType: Toast["msgType"]) => void;
  removeToast: (id: number) => void;
};
export const ToastContext = createContext<null | ToastContextType>(null);

type ToastContextProviderProps = {
  children: React.ReactNode;
};
export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, msgType: Toast["msgType"]) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, msgType }]);
  };
  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
