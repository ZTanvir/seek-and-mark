"use client";
import { useEffect, useRef } from "react";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};
export default function Modal({ children, isOpen }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      className="fixed m-auto rounded-lg border-2 border-purple-500 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
