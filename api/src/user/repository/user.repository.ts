import { User } from './../models/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByUsername(username: string) {
    return this.findOne({ username });
  }
}
