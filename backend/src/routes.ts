import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { getUsersForLoginController } from "./controllers/User/getUsersForLoginController"; 
import { GetUsersForSearchController } from "./controllers/User/getUserForSearchController";
import { UpdateUserController } from "./controllers/User/updateUserController";
import { CreateHospitalController } from "./controllers/Hospital/createHospitalController";
import { GetHospitalsForLoginController } from "./controllers/Hospital/getHospitalsForLoginController";
import { UpdateHospitalController } from './controllers/Hospital/updateHospitalController'

const router = Router();

// Rotas existentes
router.post("/login", new CreateUserController().handle);
router.post("/thisAcountExist", new getUsersForLoginController().handle);
router.post("/getUserForSearch", new GetUsersForSearchController().handle);
router.post("/updateUserProfile", new UpdateUserController().handle);
router.post("/createHospital", new CreateHospitalController().handle);
router.post("/loginHospital", new GetHospitalsForLoginController().handle);
router.post("/updateHospitalProfile", new UpdateHospitalController().handle);



const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();






router.post('/enviarFormulario', async (req, res) => {
  try {
    const pacienteData = req.body;

    // Salva os dados no banco de dados usando o Prisma
    const paciente = await prisma.paciente.create({
      data: pacienteData,
    });

    res.json({ success: true, paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao salvar os dados.' });
  }
});

router.get('/pacientePorLogin/:login', async (req, res) => {
  try {
    const { login } = req.params;

    // Adicionando log para verificar se a rota está sendo chamada corretamente
    console.log(`Buscando paciente por login: ${login}`);

    // Busca paciente por login no banco de dados usando o Prisma
    const paciente = await prisma.paciente.findFirst({
      where: { login },
    });

    if (!paciente) {
      res.status(404).json({ success: false, error: 'Paciente não encontrado.' });
    } else {
      res.json({ success: true, paciente });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao buscar o paciente.' });
  }
});

router.post('/addDiagnostico/:login', async (req, res) => {
  try {
    const { login } = req.params;
    const { descricao } = req.body;

   
    const novoDiagnostico = await prisma.diagnostico.create({
      data: {
        descricao,
       login       
      },
    });

    res.json({ success: true, diagnostico: novoDiagnostico });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao adicionar o diagnóstico.' });
  }
});

router.get('/diagnosticosPorLogin/:login', async (req, res) => {
  try {
    const { login } = req.params;

    // Busca diagnósticos por login no banco de dados usando o Prisma
    const diagnosticos = await prisma.diagnostico.findMany({
      where: { login },
    });

    res.json({ success: true, diagnosticos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao buscar os diagnósticos.' });
  }
});

export { router };
