import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

import * as fromAuth from "./reducers/auth.reducer";
import { StoreModule } from "@ngrx/store";
import { AuthEffects } from "./effects/auth.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    StoreModule.forFeature("auth", fromAuth.AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {}
