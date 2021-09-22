import {Injectable} from "@angular/core";
import {User} from "src/app/authentication/domain/User";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class PermissionService {

  user: User
  user$: BehaviorSubject<User> = new BehaviorSubject<User>(null)

  checkIfUserExists() {
    const userRaw = JSON.parse(localStorage.getItem('user'))
    userRaw && this.setUser(new User(userRaw.login,
      userRaw.email,
      userRaw.token,
      userRaw.isAdmin))
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user))
    this.user$.next(user)
  }

  getUser(): User {
    return this.user
  }

  isAuthenticated() {
    return !!this.user
  }

}
