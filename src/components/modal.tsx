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
      className="fixed m-auto opacity-0 hidden transition:[display,opacity,translate] transition-discrete translate-x-0 translate-y-12.5 duration-700 rounded-lg border-2 border-purple-500 backdrop:bg-black/50 backdrop:backdrop-blur-sm open:block open:opacity-100 open:translate-[0,0] @starting-style:opacity-0 @starting-style:translate-x-0 @starting-style:-translate-y-12.5 "
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
