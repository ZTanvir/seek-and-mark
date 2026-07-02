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

export function stringToDateTime(timeString: string) {
  const [hours, minutes, seconds] = timeString
    .split(":")
    .map((item) => Number(item));
  const dateTime = new Date(Date.UTC(1970, 0, 1, hours, minutes, seconds));
  return dateTime;
}

export function dateTimeToString(dateTime: Date) {
  const hours = String(dateTime.getUTCHours()).padStart(2, "0");
  const minutes = String(dateTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(dateTime.getUTCSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
