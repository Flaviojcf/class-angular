import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import io from 'socket.io-client';
import { environment } from '../../../../environments/environment';
import { Order, OrderService } from '../../../services/order/order.service';
import { ResponseData } from '../../../services/restaurant/restaurant.service';

interface Data<T> {
  value: T[];
  isPending: boolean;
}

@Component({
  selector: 'pmo-history',
  standalone: false,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit, OnDestroy {
  orders: Data<Order> = { value: [], isPending: true };
  private onDestroy$ = new Subject<void>();
  socket: SocketIOClient.Socket;

  constructor(private orderService: OrderService) {
    this.socket = io(environment.apiUrl);
  }

  ngOnInit(): void {
    this.getOrders();

    this.socket.on('orders created', (order: Order) => {
      this.orders.value.push(order);
    });

    this.socket.on('orders updated', (order: Order) => {
      const orderIndex = this.orders.value.findIndex(
        (item) => item._id === order._id
      );
      this.orders.value.splice(orderIndex, 1);
      this.orders.value.push(order);
    });

    this.socket.on('orders removed', (order: Order) => {
      const orderIndex = this.orders.value.findIndex(
        (item) => item._id === order._id
      );
      this.orders.value.splice(orderIndex, 1);
    });
  }

  ngOnDestroy(): void {
    this.socket.removeAllListeners();
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getOrders(): void {
    this.orderService
      .getOrders()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res: ResponseData<Order>) => {
        this.orders.value = res.data;
      });
  }

  get newOrders(): Order[] {
    const orders = this.orders.value.filter((order) => {
      return order.status === 'new';
    });
    return orders;
  }

  get preparingOrders(): Order[] {
    const orders = this.orders.value.filter((order) => {
      return order.status === 'preparing';
    });
    return orders;
  }

  get deliveryOrders(): Order[] {
    const orders = this.orders.value.filter((order) => {
      return order.status === 'delivery';
    });
    return orders;
  }

  get deliveredOrders(): Order[] {
    const orders = this.orders.value.filter((order) => {
      return order.status === 'delivered';
    });
    return orders;
  }
}