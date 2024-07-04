import { Component, OnInit } from '@angular/core';
import { Order } from '../../services/models/Order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/user-interface-service/order.service';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrl: './order-track-page.component.scss'
})
export class OrderTrackPageComponent implements OnInit {

  order!:Order;
  constructor(activatedRoute: ActivatedRoute,
              orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     if(!params['orderId']) return;

    // orderService.trackOrderById(params.orderId).subscribe(order => {
     //  this.order = order;
   //  })

  }

  ngOnInit(): void {
  }

}