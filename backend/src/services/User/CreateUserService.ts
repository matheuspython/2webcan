import { io } from "../../app";
import { prisma } from "../../prisma/index";
import { userProps } from "../../types/UserTypes";

class CreateUserService {
  async execute({
    login,
    password,
    name,
    cpf,
    email,
    endereco,
    idade,
    rg
  }: userProps) {
    // Verifique se o login já existe
    const existingUser = await prisma.user.findUnique({
      where: { login },
    });

    if (existingUser) {
      throw new Error('Usuário com este login já existe.');
    }

    const user = await prisma.user.create({
      data: {
        login,
        cpf,
        name,
        password,
        email,
        endereco,
        idade,
        rg
      },
    });
    const infoWs = {
      id: user.id,
      login: user.login,
      password: user.password,
    };
    io.emit("new_user", infoWs);
    return user;
  }
}

export { CreateUserService };
