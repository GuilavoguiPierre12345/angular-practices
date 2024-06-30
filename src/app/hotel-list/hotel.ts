// definition de l'interface Ihotel
export interface IHotel {
    hotelId : number;
    hotelName: string;
    description : string;
    price : number;
    imageUrl : string;

    // getNewPrice(price:number): number {
    // return price - 5 ;
    // }
}