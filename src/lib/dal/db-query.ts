import "server-only";
import prisma from "../prisma";

export async function getMap() {
  try {
    const maps = await prisma.map.findMany();
    return maps;
  } catch (error) {
    console.error("error on getting map data", error);
  }
}
