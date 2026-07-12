import "server-only";
import prisma from "../prisma";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log("Find user by email :", error);
  }
}

export async function createNewUser(
  username: string,
  email: string,
  hashedPassword: string,
) {
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error on creating new user", error);
  }
}
