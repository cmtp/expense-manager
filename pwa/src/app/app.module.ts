import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

// ngrx modules
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment.prod";
import { reducers, metaReducers } from "./reducers/reducers";

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: "Angular Chat NGRX",
    logOnly: environment.production
  })
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ...NGRX_IMPORTS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
