import {User} from "../../../users/user";

export const initialUserState: UserState = {
  users: null,
  selectedUser: null,
};

export interface UserState {
  users: User[];
  selectedUser: User;
}
