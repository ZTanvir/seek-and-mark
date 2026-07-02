-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_mapId_fkey";

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE CASCADE ON UPDATE CASCADE;
