import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap, tap, exhaustMap } from "rxjs/operators";

import {
  AuthActionTypes,
  LoggedIn,
  LoggedUser,
  LoginUser,
  LogoutUser,
  LoginUserError
} from "../actions/auth.actions";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService
  ) {}

  @Effect()
  LoginUserError$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserError>(AuthActionTypes.LoginUserError),
    tap(v => console.log("LoggedAPI error", v.payload)),
    map(data => {
      console.log("ERROR", data);
      return {
        type: "LOGIN_ERROR_API",
        payload: "Email or Password incorrect"
      };
    })
  );

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActionTypes.LoginUser),
    tap(v => console.log("LoginUser Effect", v)),
    map(action => action.payload),
    exhaustMap(auth => {
      return this.authService.login(auth).pipe(
        map(response => new LoggedUser(response)),
        catchError(error => of(new LoginUserError(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  LoggedUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoggedUser>(AuthActionTypes.LoggedUser),
    tap(v => this.router.navigate(["/home"])),
    map(data => {
      console.log(data);
      return { type: "", payload: data };
    })
  );
}
