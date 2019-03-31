import {
  AuthActionTypes,
  LoggedIn,
  LoggedUser,
  LoginUser,
  LogoutUser,
  LoginUserError
} from "./../Actions/auth.actions";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { AuthService } from "../service/auth.service";
import { Effect, ofType, Actions } from "@ngrx/effects";

@Injectable({
  providedIn: "root"
})
export class AuthEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private authService: AuthService
  ) {}

  @Effect()
  LoginUserError$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserError>(AuthActionTypes.LoginUserError),
    tap(v => console.log("LoggedAPI error", v.payload)),
    map(data => {
      return {
        type: "LOGIN_API_ERROR",
        payload: "Email or password incorrect"
      };
    })
  );

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActionTypes.LoginUser),
    tap(v => console.log("LoginUser effect", v)),
    mergeMap(action =>
      this.authService.login({
        email: action.payload.user,
        username: "",
        password: action.payload.password
      })
    )
  );

  @Effect()
  LoggedUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoggedUser>(AuthActionTypes.LoggedUser),
    tap(v => console.log("LoggedUser payload", v.payload)),
    map(data => {
      console.log(data);
      return {
        type: "",
        payload: data
      };
    })
  );
}
