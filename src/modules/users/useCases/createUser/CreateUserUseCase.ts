import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    this.usersRepository.findByEmail(email);
    const user = this.usersRepository.create({ name, email });

    console.log(user.id, user.admin);
    return user;
  }
}

export { CreateUserUseCase };
