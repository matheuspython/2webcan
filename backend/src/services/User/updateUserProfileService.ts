// updateUserProfileService.ts
import { prisma } from "../../prisma";
import { userProps } from "../../types/UserTypes";

class UpdateUserProfileService {
  async execute(login: string, data: userProps) {
    // Find the user by login
    const user = await prisma.user.findUnique({
      where: { login },
    });

    if (!user) {
      throw new Error('User not found.');
    }

    // Update user information
    const updatedUser = await prisma.user.update({
      where: { login },
      data,
    });

    return updatedUser;
  }
}

export { UpdateUserProfileService };
