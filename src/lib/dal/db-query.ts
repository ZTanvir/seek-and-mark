import "server-only";
import prisma from "../prisma";
import type { Leaderboard } from "@/generated/prisma/client";

export async function getMaps() {
  try {
    const maps = await prisma.map.findMany();
    return maps;
  } catch (error) {
    console.error("error on getting map data", error);
  }
}

export async function getMapByName(mapName: string) {
  try {
    const map = await prisma.map.findFirst({
      where: {
        name: mapName,
      },
      include: {
        characters: true,
      },
    });
    return map;
  } catch (error) {
    console.error(`error on getting ${mapName} map data`, error);
  }
}

export async function getCharacterById(characterId: number) {
  try {
    const character = await prisma.character.findUnique({
      where: {
        id: characterId,
      },
    });
    return character;
  } catch (error) {
    console.error("error on getting character:", error);
  }
}

export async function insertLeaderboard(leaderboard: Omit<Leaderboard, "id">) {
  try {
    await prisma.leaderboard.create({
      data: leaderboard,
    });
  } catch (error) {
    console.error("Error on add data to leaderboard table,", error);
  }
}

export async function getTopLeaderboardData(top: number) {
  try {
    const leaderboard = await prisma.leaderboard.findMany({
      orderBy: { durationMs: "asc" },
      take: top,
    });
    return leaderboard;
  } catch (error) {
    console.error(`Error on getting leaderboard table data.`, error);
  }
}
