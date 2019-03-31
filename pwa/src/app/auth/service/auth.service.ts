import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

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

  login(user: IUser): Observable<any> {
    let toSend = false;
    if(JSON.stringify(user) === JSON.stringify(this.userFake) {
      toSend = true;
    }
    return of(toSend).pipe(delay(5000));
  }
}
