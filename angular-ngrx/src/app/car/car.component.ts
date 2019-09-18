import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car, Cars} from "../car.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {Observable} from "rxjs";
import {BuyCar, DeleteCar} from "../redux/cars.actions";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  public cars: Observable<Car[]>;

  constructor(private store: Store<AppState>) {
    this.cars = this.store.select('carPage').pipe(map(val => val.cars));
  }

  onDelete(car: Car) {
    this.store.dispatch(new DeleteCar(car.id));
  }

  onBuy(car: Car) {
    this.store.dispatch(new BuyCar(car.id));
  }
}
