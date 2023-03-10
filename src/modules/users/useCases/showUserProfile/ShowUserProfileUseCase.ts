import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const users = this.usersRepository.list();
    const user = users.find((user) => user.id === user_id);
    if (!user) {
      throw new Error("user not exists");
    }
    console.log("user controleer", user);
    return user;
  }
}

export { ShowUserProfileUseCase };
