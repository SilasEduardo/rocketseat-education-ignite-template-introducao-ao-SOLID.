import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.params.id;
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    } catch (err) {
      return response.json({ error: err });
    }
  }
}

export { ShowUserProfileController };
