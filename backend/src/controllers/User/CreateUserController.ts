import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import { userProps } from "../../types/UserTypes";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      login,
      password,
      name,
      cpf,
      email,
      endereco,
      idade,
      rg
    }: userProps = req.body;

    const service = new CreateUserService();
    console.log("chegou aqui")
    const result = await service.execute({
      cpf, 
      login,
      name,
      password,
      email,
      endereco,
      idade,
      rg
    });
    console.log('chegou a criar no controler')
    return res.json(result);
  }
}

export { CreateUserController };
