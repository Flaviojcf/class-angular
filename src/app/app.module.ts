import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { DetailComponent } from './components/restaurant/detail/detail.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { MenuItemsComponent } from './components/order/menu-items/menu-items.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { HistoryComponent } from './components/order/history/history.component';
import { ListComponent } from './components/order/list/list.component';
import { ItemTotalPipe } from './pipes/item-total.pipe';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    ImageUrlPipe,
    DetailComponent,
    OrderComponent,
    MenuItemsComponent,
    OnlyNumbersDirective,
    HistoryComponent,
    ListComponent,
    ItemTotalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
],
providers: [
  ItemTotalPipe,
  { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
],
  bootstrap: [AppComponent]
})
export class AppModule { }