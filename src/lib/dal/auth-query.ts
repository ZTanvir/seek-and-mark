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
