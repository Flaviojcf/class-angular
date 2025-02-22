import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  City,
  ResponseData,
  RestaurantService,
  State,
} from './restaurant.service';
import { Restaurant } from '../../interfaces/restaurant/restaurant';

describe('RestaurantService', () => {
  let httpTestingController: HttpTestingController;
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to restaurants', () => {
    const mockRestaurants = {
      data: [
        {
          name: 'Brunch Place',
          slug: 'brunch-place',
          images: {
            thumbnail:
              'node_modules/place-my-order-assets/images/4-thumbnail.jpg',
            owner: 'node_modules/place-my-order-assets/images/2-owner.jpg',
            banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
          },
          menu: {
            lunch: [
              { name: 'Ricotta Gnocchi', price: 15.99 },
              { name: 'Garlic Fries', price: 15.99 },
              { name: 'Charred Octopus', price: 25.99 },
            ],
            dinner: [
              { name: 'Steamed Mussels', price: 21.99 },
              { name: 'Roasted Salmon', price: 23.99 },
              { name: 'Crab Pancakes with Sorrel Syrup', price: 35.99 },
            ],
          },
          address: {
            street: '2451 W Washburne Ave',
            city: 'Ann Arbor',
            state: 'MI',
            zip: '53295',
          },
          _id: 'xugqxQIX5rPJTLBv',
        },
        {
          name: 'Taco Joint',
          slug: 'taco-joint',
          images: {
            thumbnail:
              'node_modules/place-my-order-assets/images/4-thumbnail.jpg',
            owner: 'node_modules/place-my-order-assets/images/2-owner.jpg',
            banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
          },
          menu: {
            lunch: [
              { name: 'Beef Tacos', price: 15.99 },
              { name: 'Chicken Tacos', price: 15.99 },
              { name: 'Guacamole', price: 25.99 },
            ],
            dinner: [
              { name: 'Shrimp Tacos', price: 21.99 },
              { name: 'Chicken Enchilada', price: 23.99 },
              { name: 'Elotes', price: 35.99 },
            ],
          },
          address: {
            street: '13 N 21st St',
            city: 'Chicago',
            state: 'IL',
            zip: '53295',
          },
          _id: 'xugqxQIX5dfgdgTLBv',
        },
      ],
    };

    service
      .getRestaurants('IL', 'Chicago')
      .subscribe((restaurants: ResponseData<Restaurant>) => {
        expect(restaurants).toEqual(mockRestaurants);
      });

    const url =
      'http://localhost:7070/restaurants?filter%5Baddress.state%5D=IL&filter%5Baddress.city%5D=Chicago';
    // url parses to 'http://localhost:7070/restaurants?filter[address.state]=IL&filter[address.city]=Chicago'

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');
    req.flush(mockRestaurants);

    httpTestingController.verify();
  });

  it('can set proper properties on restaurant type', () => {
    const restaurant: Restaurant = {
      name: 'Taco Joint',
      slug: 'taco-joint',
      images: {
        thumbnail: 'node_modules/place-my-order-assets/images/4-thumbnail.jpg',
        owner: 'node_modules/place-my-order-assets/images/2-owner.jpg',
        banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
      },
      menu: {
        lunch: [
          { name: 'Beef Tacos', price: 15.99 },
          { name: 'Chicken Tacos', price: 15.99 },
          { name: 'Guacamole', price: 25.99 },
        ],
        dinner: [
          { name: 'Shrimp Tacos', price: 21.99 },
          { name: 'Chicken Enchilada', price: 23.99 },
          { name: 'Elotes', price: 35.99 },
        ],
      },
      address: {
        street: '13 N 21st St',
        city: 'Chicago',
        state: 'IL',
        zip: '53295',
      },
      _id: 'xugqxQIX5dfgdgTLBv',
    };
    // will error if interface isn’t implemented correctly
    expect(true).toBe(true);
  });

  it('should make a GET request to states', () => {
    const mockStates = {
      data: [{ name: 'Missouri', short: 'MO' }],
    };

    service.getStates().subscribe((states: ResponseData<State>) => {
      expect(states).toEqual(mockStates);
    });

    const url = 'http://localhost:7070/states';
    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');
    req.flush(mockStates);

    httpTestingController.verify();
  });

  it('should make a GET request to cities', () => {
    const mockCities = {
      data: [{ name: 'Kansas City', state: 'MO' }],
    };

    service.getCities('MO').subscribe((cities: ResponseData<City>) => {
      expect(cities).toEqual(mockCities);
    });

    const url = 'http://localhost:7070/cities?state=MO';
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCities);

    httpTestingController.verify();
  });

  it('should make a GET request to get a restaurant based on its slug', () => {
    const mockRestaurant = {
      name: 'Brunch Place',
      slug: 'brunch-place',
      images: {
        thumbnail: 'node_modules/place-my-order-assets/images/4-thumbnail.jpg',
        owner: 'node_modules/place-my-order-assets/images/2-owner.jpg',
        banner: 'node_modules/place-my-order-assets/images/2-banner.jpg',
      },
      menu: {
        lunch: [
          { name: 'Ricotta Gnocchi', price: 15.99 },
          { name: 'Garlic Fries', price: 15.99 },
          { name: 'Charred Octopus', price: 25.99 },
        ],
        dinner: [
          { name: 'Steamed Mussels', price: 21.99 },
          { name: 'Roasted Salmon', price: 23.99 },
          { name: 'Crab Pancakes with Sorrel Syrup', price: 35.99 },
        ],
      },
      address: {
        street: '2451 W Washburne Ave',
        city: 'Ann Arbor',
        state: 'MI',
        zip: '53295',
      },
      _id: 'xugqxQIX5rPJTLBv',
    };

    service
      .getRestaurant('brunch-place')
      .subscribe((restaurant: Restaurant) => {
        expect(restaurant).toEqual(mockRestaurant);
      });

    const url = 'http://localhost:7070/restaurants/brunch-place';
    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');
    req.flush(mockRestaurant);

    httpTestingController.verify();
  });
});