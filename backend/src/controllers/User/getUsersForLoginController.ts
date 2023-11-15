import { Request, Response } from "express";
import { GetUsersForLoginService } from "../../services/User/getUsersForLoginService";
// import { userProps } from "../../types/UserTypes";

export class getUsersForLoginController {
  async handle(request: Request, response: Response) {
    const { login, password } = request.body;
    const service = new GetUsersForLoginService();
    const result = await service.execute();
    let resultOfLogin = false;
    let userData = undefined
    result.forEach(value => {
      if (value.login === login && value.password === password) {
        resultOfLogin = true;
        userData = value
        userData.password = ''
      }
    });
    console.log(userData)
    return response.json({
      loginExiste: resultOfLogin,
      userData
    });
  }
}
