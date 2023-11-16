// createHospitalController.ts
import { Request, Response } from "express";
import { CreateHospitalService } from "../../services/Hospital/createHospitalService";
import { hospitalProps } from "../../types/HospitalTypes";

class CreateHospitalController {
  async handle(req: Request, res: Response) {
    const {
      nome,
      endereco,
      cnpj,
      telefone,
      email,
      senha,
      idHospital,
      login
    }: hospitalProps = req.body;

    const service = new CreateHospitalService();
    const result = await service.execute({
      nome,
      endereco,
      cnpj,
      telefone,
      email,
      senha,
      idHospital,
      login
    });

    return res.json(result);
  }
}

export { CreateHospitalController };
