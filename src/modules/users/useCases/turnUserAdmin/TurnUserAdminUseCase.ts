import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const users = this.usersRepository.list();

    const existsUser = users.find((user) => user.id === user_id);

    if (!existsUser) {
      throw new Error("User not exists");
    }

    const user = this.usersRepository.turnAdmin(existsUser);
    return user;
  }
}

export { TurnUserAdminUseCase };
