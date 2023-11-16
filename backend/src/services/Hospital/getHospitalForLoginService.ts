// getHospitalForLoginService.ts
import { prisma } from "../../prisma";
import { hospitalProps } from "../../types/HospitalTypes";

class GetHospitalForLoginService {
  async execute() {
    const hospitalsList = await prisma.hospital.findMany();
    return hospitalsList;
  }
}

export { GetHospitalForLoginService };
