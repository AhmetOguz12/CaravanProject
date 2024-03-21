export interface RentalDetailDto {
  id: number;
  caravanId: number;
  caravanName: string; // Caravan name eklendi
  rentDate: Date;
  returnDate: Date;
}
