import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const existsUser = this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new Error("user not fonud");
    }

    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
