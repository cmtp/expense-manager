import { UserRepository } from './user.repository';

describe('User.Repository', () => {
  it('should be defined', () => {
    expect(new UserRepository()).toBeDefined();
  });
});
