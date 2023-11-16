// getHospitalsForLoginController.ts
import { Request, Response } from "express";
import { GetHospitalForLoginService } from "../../services/Hospital/getHospitalForLoginService";
import { hospitalProps } from "../../types/HospitalTypes";

class GetHospitalsForLoginController {
  async handle(request: Request, response: Response) {
    const { login, senha } = request.body;
    const service = new GetHospitalForLoginService();
    const result = await service.execute();

    let resultOfLogin = false;
    let hospitalData = undefined;

    result.forEach((value) => {
      if (value.cnpj === login && value.senha === senha) {
        resultOfLogin = true;
        hospitalData = value;
        // Não envie a senha no response por motivos de segurança
        hospitalData.senha = ''
      }
    });

    return response.json({
      loginExiste: resultOfLogin,
      hospitalData,
    });
  }
}

export { GetHospitalsForLoginController };
