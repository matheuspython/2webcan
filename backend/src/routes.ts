import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { getUsersForLoginController } from "./controllers/User/getUsersForLoginController"; 
import { GetUsersForSearchController } from "./controllers/User/getUserForSearchController";
import { UpdateUserController } from "./controllers/User/updateUserController";
const router = Router();

router.post("/login", new CreateUserController().handle);
router.post("/thisAcountExist", new getUsersForLoginController().handle);
router.post("/getUserForSearch", new GetUsersForSearchController().handle)
router.post("/updateUserProfile", new  UpdateUserController().handle);
export { router };
