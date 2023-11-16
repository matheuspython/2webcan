import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { getUsersForLoginController } from "./controllers/User/getUsersForLoginController"; 
import { GetUsersForSearchController } from "./controllers/User/getUserForSearchController";
import { UpdateUserController } from "./controllers/User/updateUserController";
import { CreateHospitalController } from "./controllers/Hospital/createHospitalController";
import { GetHospitalsForLoginController } from "./controllers/Hospital/getHospitalsForLoginController";
import { UpdateHospitalController } from './controllers/Hospital/updateHospitalController'

const router = Router();

router.post("/login", new CreateUserController().handle);
router.post("/thisAcountExist", new getUsersForLoginController().handle);
router.post("/getUserForSearch", new GetUsersForSearchController().handle)
router.post("/updateUserProfile", new  UpdateUserController().handle);
router.post("/createHospital", new CreateHospitalController().handle);
router.post("/loginHospital", new GetHospitalsForLoginController().handle);
router.post("/updateHospitalProfile", new  UpdateHospitalController().handle);


export { router };
