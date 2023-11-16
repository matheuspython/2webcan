// createHospitalService.ts
import { prisma } from "../../prisma";
import { hospitalProps } from "../../types/HospitalTypes";

class CreateHospitalService {
  async execute({
    nome,
    endereco,
    cnpj,
    telefone,
    email,
    senha,
    idHospital,
    login
  }: hospitalProps) {
    // Verifique se o CNPJ já existe
    const existingHospital = await prisma.hospital.findUnique({
      where: { cnpj },
    });

    if (existingHospital) {
      throw new Error('Hospital com este CNPJ já existe.');
    }

    const hospital = await prisma.hospital.create({
      data: {
        nome,
        endereco,
        cnpj,
        telefone,
        email,
        senha,
        idHospital,
        login
      },
    });
    return hospital;
  }
}

export { CreateHospitalService };
