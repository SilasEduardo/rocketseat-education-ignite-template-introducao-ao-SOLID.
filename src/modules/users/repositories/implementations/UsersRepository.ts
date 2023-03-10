import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    if (this.findByEmail(email)) {
      throw new Error("User already exists");
    }
    const user = new User();
    Object.assign(user, {
      name,
      admin: false,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const existsUser = this.users.find((user) => user.id === id);
    console.log("user find id", existsUser);
    return existsUser;
  }

  findByEmail(email: string): User | undefined {
    const existsUser = this.users.find((user) => user.email === email);
    return existsUser;
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
