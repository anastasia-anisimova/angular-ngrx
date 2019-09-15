import {Config} from "../../../common/config";

export const initialConfigState: ConfigState = {
  config: null,
};

export interface ConfigState {
  config: Config;
}
