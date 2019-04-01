import { Component, OnInit } from "@angular/core";
import { IUser } from "../../interfaces/IUser";

import { Store, select } from "@ngrx/store";

import * as fromAuth from "../../reducers/reducers";
import * as Auth from "../actions/auth.actions";

@Component({
  selector: "exp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: IUser;
  error$ = this.store.select(fromAuth.getAuthError);
  isLoading$ = this.store.select(fromAuth.getAuthLoading);

  constructor(private store: Store<fromAuth.State>) {}

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
