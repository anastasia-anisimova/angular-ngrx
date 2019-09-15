import {Action} from "@ngrx/store";
import {Config} from "../../../users/config";

export enum EConfigActions {
  GET_CONFIG = 'Get Config',
  GET_CONFIG_SUCCESS = 'Get Config Success',
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GET_CONFIG;
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GET_CONFIG_SUCCESS;

  constructor(public payload: Config) {
  }
}

export type ConfigActions = GetConfig | GetConfigSuccess;
