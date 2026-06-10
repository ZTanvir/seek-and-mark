import prisma from "@/lib/prisma";
import { Map } from "@/generated/prisma/client";

// add map
async function seedMap() {
  const storageBaseUrl =
    "https://mwwersnziqamcoulatdp.supabase.co/storage/v1/object/public/seek_and_mark";
  const mapData: Omit<Map, "id" | "createdAt">[] = [
    {
      name: "robocity",
      thumbnailUrl: `${storageBaseUrl}/robotcity/robot-city-thumbnail.webp`,
      imageUrl: `${storageBaseUrl}/robotcity/main-robotcity.webp`,
    },
  ];
  console.log("Seed map started");
  const result = await prisma.map.createMany({
    data: mapData,
    skipDuplicates: true,
  });
  console.log(`Successfully seeded ${result.count}`);
}

seedMap().catch((e) => {
  console.error("Seeding failed", e);
});
// add character to map
