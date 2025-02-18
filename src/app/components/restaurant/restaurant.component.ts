import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant/restaurant';
import { RestaurantService, ResponseData } from '../../services/restaurant/restaurant.service';

export interface Data {
  value: Restaurant[];
  isPending: boolean;
}

@Component({
  selector: 'pmo-restaurant',
  standalone: false,
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent implements OnInit {
  restaurants: Data = {
    value: [],
    isPending: false,
  };

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurants.isPending = true;
    this.restaurantService.getRestaurants().subscribe((res: ResponseData) => {
      this.restaurants.value = res.data;
      this.restaurants.isPending = false;
    });
  }
}