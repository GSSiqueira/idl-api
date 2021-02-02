import { Entity, EntityRepository, Repository } from "typeorm";
import { User, UserDTO } from "../../entities/User";

@EntityRepository(User)
export class TOUserRepository extends Repository<User> {
  addNewUser(data: UserDTO) {
    const newUser = new User();
    newUser.email = data.email;
    newUser.username = data.username;
    newUser.password = data.password;
    newUser.isAdmin = data.isAdmin;

    return this.save(newUser);
  }

  getUserById(id: number) {
    return this.findOneOrFail(id);
  }

  getUserByUsername(username: string) {
    return this.findOne({ username });
  }

  validateUser(username: string, password: string) {
    return this.findOneOrFail({ username, password });
  }
}
