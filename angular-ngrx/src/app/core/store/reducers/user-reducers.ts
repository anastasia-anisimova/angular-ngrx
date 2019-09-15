import {initialUserState, UserState} from "../state/user-state";
import {EUserActions, UserActions} from "../actions/user-actions";

export const userReducers = (
  state = initialUserState,
  action: UserActions
): UserState => {
   switch(action.type) {
     case EUserActions.GET_USERS_SUCCESS: {
       return {
         ...state,
         users: action.payload,
       };
     }
     case EUserActions.GET_USER_SUCCESS: {
       return {
         ...state,
         selectedUser: action.payload,
       }
     }
     default: return state;
   }
};
