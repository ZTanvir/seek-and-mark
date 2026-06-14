import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function shuffle<T>(items: T[]) {
  // The Fisher-Yates Algorithm
  const itemsList = [...items];

  for (let index = itemsList.length - 1; index >= 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = itemsList[index];
    itemsList[index] = itemsList[randomIndex];
    itemsList[randomIndex] = temp;
  }
  return itemsList;
}
