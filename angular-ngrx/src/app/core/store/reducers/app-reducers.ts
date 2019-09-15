import {AppState} from "../state/app-state";
import {ActionReducerMap} from "@ngrx/store";
import {userReducers} from "./user-reducers";
import {configReducers} from "./config-reducers";
import {routerReducer} from "@ngrx/router-store";

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
};
