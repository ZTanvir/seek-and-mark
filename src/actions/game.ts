"use server";
import { getCharacterById } from "@/lib/dal/db-query";
import type { Leaderboard } from "@/generated/prisma/client";

type LeaderboardData = {
  mapId: Leaderboard["mapId"];
  userId?: Leaderboard["userId"];
  username: Leaderboard["username"];
  startTime: Leaderboard["startTime"];
  endTime: Leaderboard["endTime"];
  durationMs: Leaderboard["durationMs"];
};

export async function validateCharacter(
  characterId: number,
  xAxis: number,
  yAxis: number,
) {
  const character = await getCharacterById(characterId);
  if (character) {
    if (
      xAxis >= character.xMin &&
      xAxis <= character.xMax &&
      yAxis >= character.yMin &&
      yAxis <= character.yMax
    ) {
      return { success: true, message: `${character.name} is found.` };
    } else {
      return {
        success: false,
        message: `This is not ${character.name}. Keep looking around.`,
      };
    }
  } else {
    return {
      success: false,
      message: "Character not found in the store! refresh again.",
    };
  }
}

export async function addLeaderboard({
  mapId,
  userId,
  username,
  endTime,
  durationMs,
}: LeaderboardData) {}
