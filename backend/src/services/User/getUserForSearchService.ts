import { prisma } from "../../prisma";

export class GetUsersForSearchService {
  async execute() {
    const usersList = await prisma.user.findMany();

    return usersList;
  }
}
