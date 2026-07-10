import "server-only";
import prisma from "../prisma";

export async function getUserByEmailAndPassword(
  email: string,
  hashedPassword: string,
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
        hashedPassword,
      },
    });
    return user;
  } catch (error) {
    console.log("Find user by email and password error:", error);
  }
}
