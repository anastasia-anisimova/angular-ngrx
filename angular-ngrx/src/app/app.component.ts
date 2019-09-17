import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Car, Cars} from "./car.model";
import {AppState} from "./redux/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // public cars: Car[] = [];
  public carsState: Observable<Cars>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.carsState = this.store.select('carPage');
    // this.store.select('carPage').subscribe(({cars}) => this.cars = cars);
  }

  onDelete(car: Car) {
    // this.cars = this.cars.filter(c => c.id !== car.id);
  }

}
