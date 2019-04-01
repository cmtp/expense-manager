import { Injectable } from "@angular/core";

import { from, Observable, of, throwError } from "rxjs";

import { IUser } from "../../interfaces/IUser";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userFake: IUser = {
    username: "christiantola",
    email: "christian@example.com",
    password: "christiantola"
  };

  constructor() {}

  login(user: any): Observable<any> {
    let toSend = {
      isLoading: false,
      error: true,
      ...user
    };
    console.error(user.user);
    console.error(this.userFake);
    if (JSON.stringify(user.user) === JSON.stringify(this.userFake)) {
      toSend = {
        isLoading: false,
        error: false,
        user: user
      };
    } else {
      return throwError("Invalid username or password");
    }
    return of(toSend).pipe(delay(5000));
  }
}
