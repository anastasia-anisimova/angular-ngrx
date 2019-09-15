import {initialUserState, UserState} from "./user-state";
import {ConfigState, initialConfigState} from "./config-state";
import {RouterReducerState} from "@ngrx/router-store";

export const initialAppState: AppState = {
  users: initialUserState,
  config: initialConfigState,
};

export function getInitialAppState() {
  return initialAppState;
}

export interface AppState {
  users: UserState;
  config: ConfigState;
  router?: RouterReducerState;
}
