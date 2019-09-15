import {ConfigActions, EConfigActions} from "../actions/config-actions.enum";
import {ConfigState, initialConfigState} from "../state/config-state";

export const configReducers = (
  state = initialConfigState,
  action: ConfigActions
): ConfigState => {
  switch (action.type) {
    case EConfigActions.GET_CONFIG_SUCCESS: {
      return {
        ...state,
        config: action.payload,
      };
    }
    default:
      return state;
  }
};
