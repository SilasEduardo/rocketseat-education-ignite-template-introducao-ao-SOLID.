import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const admin = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });
      return response.json(admin);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
