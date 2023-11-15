import { Request, Response } from "express";
import { GetUsersForSearchService } from "../../services/User/getUserForSearchService";
// import { userProps } from "../../types/UserTypes";

export class GetUsersForSearchController {
  async handle(request: Request, response: Response) {
    const { login } = request.body;
    const service = new GetUsersForSearchService();
    const result = await service.execute();
    
    let resultOfLogin = false;
    let userData = undefined
    result.forEach(value => {
      if (value.login === login && value.login === login) {
        resultOfLogin = true;
        userData = value
        userData.password = ''
      }
    });

    return response.json({
      loginExiste: resultOfLogin,
      userData
    });
  }
}
