// updateHospitalProfileService.ts
import { prisma } from "../../prisma";
import { hospitalProps } from "../../types/HospitalTypes";

class UpdateHospitalProfileService {
  async execute(login: string, data: hospitalProps) {
    // Encontrar o hospital pelo CNPJ
    const hospital = await prisma.hospital.findUnique({
      where: { login },
    });

    if (!hospital) {
      throw new Error('Hospital not found.');
    }

    // Atualizar informações do hospital
    const updatedHospital = await prisma.hospital.update({
      where: { login },
      data,
    });

    return updatedHospital;
  }
}

export { UpdateHospitalProfileService };
