import prisma from "@/lib/prisma";
import { Map } from "@/generated/prisma/client";

// add map
async function seedMap() {
  await prisma.map.deleteMany();
  await prisma.character.deleteMany({});
  const storageBaseUrl =
    "https://mwwersnziqamcoulatdp.supabase.co/storage/v1/object/public/seek_and_mark";
  const mapsData = [
    {
      name: "robocity",
      thumbnailUrl: `${storageBaseUrl}/robotcity/robot-city-thumbnail.webp`,
      imageUrl: `${storageBaseUrl}/robotcity/main-robotcity.webp`,
      characters: [
        {
          name: "Agent",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/agent.png`,
          xMin: 39,
          yMin: 28,
          xMax: 44,
          yMax: 30,
        },
        {
          name: "Assassin",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/assassin.png`,
          xMin: 22,
          yMin: 76,
          xMax: 28,
          yMax: 79,
        },
        {
          name: "Fat man",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/fatman.png`,
          xMin: 77,
          yMin: 64,
          xMax: 81,
          yMax: 68,
        },
        {
          name: "Lord robot",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/lord_robot.png`,
          xMin: 77,
          yMin: 64,
          xMax: 81,
          yMax: 68,
        },
        {
          name: "Mad doctor",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/mad_doctor.png`,
          xMin: 38,
          yMin: 18,
          xMax: 43,
          yMax: 24,
        },
        {
          name: "Orange ball",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/orange_ball.png`,
          xMin: 21,
          yMin: 56,
          xMax: 26,
          yMax: 60,
        },
        {
          name: "Pirate",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/pirate.png`,
          xMin: 80,
          yMin: 86,
          xMax: 88,
          yMax: 91,
        },
        {
          name: "Scientist",
          avatarUrl: `${storageBaseUrl}/robotcity/characters/scientist.png`,
          xMin: 46,
          yMin: 34,
          xMax: 51,
          yMax: 39,
        },
      ],
    },
  ];
  console.log("Seed map started");
  for (const mapData of mapsData) {
    const result = await prisma.map.create({
      data: {
        name: mapData.name,
        imageUrl: mapData.imageUrl,
        thumbnailUrl: mapData.thumbnailUrl,
        characters: {
          create: mapData.characters,
        },
      },
    });
    console.log(`Successfully seeded ${result.name}`);
  }
}

seedMap().catch((e) => {
  console.error("Seeding failed", e);
});
// add character to map
