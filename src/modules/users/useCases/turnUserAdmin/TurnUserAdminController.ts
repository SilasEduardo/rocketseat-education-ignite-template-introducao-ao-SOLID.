import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.send(userAdmin);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
