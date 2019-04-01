import { Component, OnInit } from "@angular/core";
import { IUser } from "src/app/interfaces/IUser";

import { Store, select } from "@ngrx/store";
import * as Auth from "../Actions/auth.actions";

@Component({
  selector: "exp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: IUser;
  error$ = this.store.select(state => state.auth.error);
  isLoading$ = this.store.select(state => state.auth.isLoading);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.user = {
      username: "christiantola",
      email: "christian@example.com",
      password: "christiantola"
    };
  }

  login() {
    this.store.dispatch(new Auth.LoginUser({ user: this.user }));
  }
}
