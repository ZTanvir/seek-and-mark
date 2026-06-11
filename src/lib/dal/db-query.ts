import "server-only";
import prisma from "../prisma";

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
