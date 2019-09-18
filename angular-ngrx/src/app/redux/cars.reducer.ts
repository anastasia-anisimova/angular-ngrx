import {Car} from "../car.model";
import {Action} from "@ngrx/store";
import {AddCar, CAR_ACTION, CarsActions} from "./cars.actions";

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ],
};

export function carsReducer(state = initialState, action: CarsActions) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payLoad]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter(val => val.id !== action.payLoad),
      };
    case CAR_ACTION.BUY_CAR:
      return {
        ...state,
        cars: state.cars.map(val => {
          if (val.id === action.payLoad) {
            val.isSold = true;
          }
          return val;
        })
      };
    default:
      return state;
  }
}
