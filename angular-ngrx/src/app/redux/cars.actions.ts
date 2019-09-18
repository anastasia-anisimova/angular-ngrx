import {Action} from "@ngrx/store";
import {Car} from "../car.model";

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const BUY_CAR = 'BUY_CAR';
}

export class AddCar implements Action {
  public readonly type = CAR_ACTION.ADD_CAR;
  constructor(public payLoad: Car) {
  }
}

export class DeleteCar implements Action {
  public readonly type = CAR_ACTION.DELETE_CAR;
  constructor(public payLoad: number) {
  }
}

export class BuyCar implements Action {
  public readonly type = CAR_ACTION.BUY_CAR;
  constructor(public payLoad: number) {
  }
}


export type CarsActions = AddCar | DeleteCar | BuyCar;
