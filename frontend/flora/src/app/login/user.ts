export class User {

  username: string;
  password: string;

  constructor() {
  }

  public static isNull(user: User): boolean {
    return user.username === null &&
      user.password === null;
  }
}
