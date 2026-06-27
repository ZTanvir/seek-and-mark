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

export async function getMapById(mapId: number) {
  try {
    const map = await prisma.map.findUnique({
      where: {
        id: mapId,
      },
      include: {
        characters: true,
      },
    });
    return map;
  } catch (error) {
    console.error(`error on getting ${mapId} map data`, error);
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

export async function getTopLeaderboardData(
  top: number,
  mapId: number,
  skip?: number,
) {
  try {
    const leaderboard = await prisma.leaderboard.findMany({
      where: {
        mapId,
      },
      orderBy: [{ durationMs: "asc" }, { username: "asc" }],
      take: top,
      skip: !skip ? 0 : skip,
      include: {
        map: {
          select: {
            name: true,
          },
        },
      },
    });
    return leaderboard;
  } catch (error) {
    console.error(`Error on getting leaderboard table data.`, error);
  }
}

export async function leaderboardCount() {
  try {
    const leaderboardCount = await prisma.leaderboard.count();
    return leaderboardCount;
  } catch (error) {
    console.error("Error on getting leaderboard count", error);
  }
}
