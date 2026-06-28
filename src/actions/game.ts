"use server";
import { getCharacterById, getTopLeaderboardData } from "@/lib/dal/db-query";
import { Leaderboard } from "@/generated/prisma/client";
import { insertLeaderboard } from "@/lib/dal/db-query";
import {
  ValidateCharacterSchema,
  TopScorerSchema,
} from "@/lib/schemas/game-schema";

export async function validateCharacter(
  characterId: unknown,
  xAxis: unknown,
  yAxis: unknown,
) {
  const result = ValidateCharacterSchema.safeParse({
    characterId,
    xAxis,
    yAxis,
  });
  if (!result.success) {
    const errorMessage = result.error.issues.map((issue) => issue.message);
    return {
      success: false,
      message: errorMessage.join(".\n"),
    };
  } else {
    const { characterId, xAxis, yAxis } = result.data;
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
}

export async function addLeaderboard(leaderboard: Omit<Leaderboard, "id">) {
  await insertLeaderboard(leaderboard);
}

export async function getTopScorerFromLeaderboard(
  top: unknown,
  mapId: unknown,
) {
  const result = TopScorerSchema.safeParse({ top, mapId });

  if (!result.success) {
    console.error(result.error.issues);
  } else {
    const { top, mapId } = result.data;
    const topScorer = await getTopLeaderboardData(top, mapId);
    return topScorer;
  }
}
