import * as z from "zod";

export const ValidateCharacterSchema = z.object({
  characterId: z.number("CharacterId is not a number"),
  xAxis: z.number("xAxis is not a number"),
  yAxis: z.number("yAxis is not a number"),
});
