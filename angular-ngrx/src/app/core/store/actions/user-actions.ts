import {Action} from "@ngrx/store";
import {User} from "../../../users/user";

export enum EUserActions {
  GET_USERS = 'Get Users',
  GET_USERS_SUCCESS = 'Get Users Success',
  GET_USER = 'Get User',
  GET_USER_SUCCESS = 'Get User Success',
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GET_USERS;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GET_USER;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GET_USER_SUCCESS;
  constructor(public payload: User) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
