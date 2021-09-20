export class User {
  constructor(
    private readonly login: string,
    private readonly password: string,
    private readonly email: string,
    private readonly token: string,
    private readonly isAdmin?: boolean
  ) {}

  getUserLogin(): string {
    return this.login
  }

  getUserEmail(): string {
    return this.email
  }

  getToken(): string {
    return this.token
  }
}
