import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { DetailComponent } from './components/restaurant/detail/detail.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HistoryComponent } from './components/order/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restaurants',
    component: RestaurantComponent,
  },
  {
    path: 'restaurants/:slug',
    component: DetailComponent,
  },
  {
    path: 'restaurants/:slug/order',
    component: OrderComponent,
  },
  {
    path: 'order-history',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}