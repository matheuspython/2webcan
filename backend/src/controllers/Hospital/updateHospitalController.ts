// updateHospitalController.ts
import { Request, Response } from "express";
import { UpdateHospitalProfileService } from "../../services/Hospital/updateHospitalProfileService";
import { hospitalProps } from "../../types/HospitalTypes";

class UpdateHospitalController {
  async handle(request: Request, response: Response) {
    const { login, endereco, nome, email, senha, telefone } = request.body;
    const service = new UpdateHospitalProfileService();

    try {
      const updatedHospital = await service.execute(login, {
        endereco,
        nome,
        email,
        senha,
        telefone
      } as hospitalProps);

      return response.json({
        success: true,
        updatedHospital,
      });
    } catch (error) {
      return response.status(400).json({
        success: false,
        // error: error.message,
      });
    }
  }
}

export { UpdateHospitalController };
