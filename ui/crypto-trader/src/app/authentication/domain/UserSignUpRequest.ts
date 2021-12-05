export class UserSignUpRequest {
  constructor(
    private readonly login: string,
    private readonly email: string,
    private readonly password: string) {
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }
}
