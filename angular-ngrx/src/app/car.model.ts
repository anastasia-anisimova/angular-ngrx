export class Car {
  public name: string;
  public date: string;
  public model: string;
  public isSold: boolean = false;
  public id?: number;

  constructor(
    name: string,
    date: string,
    model: string,
    isSold: boolean,
    id?: number) {
    this.name = name;
    this.date = date;
    this.model = model;
    this.isSold = isSold;
    this.id = id;
  }
}

export interface Cars {
  cars: Car[];
}
