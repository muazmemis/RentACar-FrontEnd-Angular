import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetail: CarDetail;
  currentCar: Car;
  dataLoaded: boolean = false;
  imgUrl: string = environment.baseURL;
  filterCar: string = '';
  colorId: number;
  brandId: number;
  brands: Brand[] = [];
  colors: Color[] = [];

  constructor(
    private carService: CarService,
    private activedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private brandService: BrandService,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarListBrandIdColorId(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
        this.getAllColors();
        this.getAllBrands();
      }
    });
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getAllColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setSelectedColorId(colorId: number) {
    if (this.colorId == colorId) {
      return true;
    } else {
      return false;
    }
  }

  setSelectedBrandId(brandId: number) {
    if (this.brandId == brandId) {
      return true;
    } else {
      return false;
    }
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  addToRental(car: Car) {
    this.toastrService.success('Araç kiralandı', car.carName);
    this.cartService.addToRental(car);
  }

  getCarListBrandIdColorId(brandId: number, colorId: number) {
    this.carService
      .getCarListBrandIdColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
      });
  }

  filterClick() {
    if (this.brandId && this.colorId) {
      this.router.navigate([
        '/cars/brandId/' + this.brandId + '/colorId/' + this.colorId,
      ]);
    } else if (this.brandId) {
      this.router.navigate(['/cars/brand/' + this.brandId]);
    } else if (this.colorId) {
      this.router.navigate(['/cars/color/' + this.colorId]);
    } else {
      this.router.navigate(['/cars']);
    }
  }
}
