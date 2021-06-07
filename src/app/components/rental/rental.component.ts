import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers: [DatePipe],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  customers: Customer[];
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  carDetails: CarDetail[] = [];
  carDetail: CarDetail;
  minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;

  constructor(
    private rentalService: RentalService,
    private customerService: CustomerService,
    private carService: CarService,
    private router: Router,
    private toastrService: ToastrService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
      } else {
        this.getRentals();
      }
    });
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }

  getRentalByCarId(carId: number) {
    this.rentalService.getRentalByCarId(carId).subscribe((response) => {
      this.rentals = response.data;
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.carDetail = this.carDetails[0];
    });
  }

  createRental() {
    let rental: Rental = {
      carId: this.carDetail.carId,
      brandName: this.carDetail.brandName,
      colorName: this.carDetail.colorName,
      dailyPrice: this.carDetail.dailyPrice,
      description: this.carDetail.description,
      customerId: 2,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carName: this.carDetail.carName,
      customerName: 'customerName',
    };
    if (rental.customerId == undefined || rental.rentDate == undefined) {
      console.log(rental.customerId);

      this.toastrService.error(
        'Eksik bilgi girdiniz',
        'Bilgilerinizi kontrol edin'
      );
    } else {
      this.router.navigate(['/payment/', JSON.stringify(rental)]);
      this.toastrService.info(
        'Ödeme sayfasına yönlendiriliyorsunuz...',
        'Ödeme İşlemleri'
      );
      setTimeout(function () {
        location.reload();
      }, 2000);
    }
  }

  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }

  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }

  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  setCustomerId(customerId: string) {
    this.customerId = +customerId;
    console.log(this.customerId);
  }
}
