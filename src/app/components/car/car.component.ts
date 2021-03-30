import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car1: any = {
    carId: 1,
    carName: 'Laptop',
    brandId: 1,
    dailyPrice: 5,
  };
  car2: any = {
    carId: 2,
    carName: 'Bardak',
    brandId: 1,
    dailyPrice: 5,
  };
  car3: any = {
    carId: 3,
    carName: 'Keyboard',
    brandId: 1,
    dailyPrice: 5,
  };
  car4: any = {
    carId: 4,
    carName: 'Mouse',
    brandId: 1,
    dailyPrice: 5,
  };

  cars = [this.car1, this.car2, this.car3, this.car4];

  constructor() {}

  ngOnInit(): void {}
}
