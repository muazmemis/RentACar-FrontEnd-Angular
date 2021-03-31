export interface Rental {
  id: number;
  carId: number;
  customerId: number;
  carName: string;
  customerName: string;
  rentDate: Date;
  returnDate: Date;
  dailyPrice: number;
}
