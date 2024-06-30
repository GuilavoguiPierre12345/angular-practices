import { NgFor, NgIf, UpperCasePipe, CurrencyPipe, registerLocaleData, } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IHotel } from './hotel';
import { ReplaceComma } from '../shared/pipes/replace-comma.pipe';

registerLocaleData(localFr, 'fr')


@Component({
  selector: 'app-hotel-list',
  standalone: true,
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  imports : [NgIf,NgFor,FormsModule,UpperCasePipe,CurrencyPipe]
})

export class HotelListComponent{
  public title: string = 'Liste Hotels';
  public hotels : IHotel[] = [
    {
      hotelId : 1,
      hotelName: 'Bueau swet life',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl : 'assets/img/hotel-1.jpg'
    },
    {
      hotelId : 2,
      hotelName: 'Marakech',
      description : 'Profitez de la vue sur les montagnes',
      price : 145.5,
      imageUrl : 'assets/img/hotel-2.jpg'
    },
    {
      hotelId : 3,
      hotelName: 'Bueau swet life',
      description : 'Belle vue au bord de la mer',
      price : 120.12,
      imageUrl : 'assets/img/hotel-3.jpg'
    },
    {
      hotelId : 4,
      hotelName: 'Cape town city',
      description : 'Magnifique cadre pour votre sejour',
      price : 135.12,
      imageUrl : 'assets/img/hotel-4.jpg'
    },
  ];

  private _hotelFilter: string = 'mot';
  public filteredHotels : IHotel[] = [];

  ngOnInit() {
    this.filteredHotels = this.hotels;
    this.hotelFilter = "mot";
  }

  public get hotelFilter():string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter:string) {
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels
  }

  private filterHotels(criteria:string):IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }


}
