export interface Rental {
  id?: number;
  carId: number;
  customerId: number;
  carName: string;
  brandName: string;
  colorName: string;
  customerName: string;
  rentDate: Date;
  returnDate: Date;
  dailyPrice: number;
  description: string;
}
