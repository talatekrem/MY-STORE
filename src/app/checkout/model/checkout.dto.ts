export class CheckoutDto {
  products: Array<{
    id: number;
    name: string;
    price: number;
  }>;
  totalPrice: number;
}
