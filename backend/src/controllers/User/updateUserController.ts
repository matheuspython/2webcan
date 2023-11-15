// updateUserController.ts
import { Request, Response } from "express";
import { UpdateUserProfileService } from "../../services/User/updateUserProfileService";
import {userProps} from '../../types/UserTypes'
export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { login, endereco, idade, email, password } = request.body;
    const service = new UpdateUserProfileService();

    try {
      const updatedUser = await service.execute(login, { endereco, idade, email, password } as userProps);

      return response.json({
        success: true,
        updatedUser,
      });
    } catch (error) {
      return response.status(400).json({
        success: false,
        // error: error.message,
      });
    }
  }
}
