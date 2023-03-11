import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existsUser = this.usersRepository.findByEmail(email);

    console.log("user already", existsUser);

    if (existsUser) {
      throw new Error("user already exists");
    }

    const newUser = this.usersRepository.create({ email, name });
    return newUser;
  }
}
export { CreateUserUseCase };
