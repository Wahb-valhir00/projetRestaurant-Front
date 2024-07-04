import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit {

  /*order:Order = new Order();
   constructor(orderService: OrderService, router: Router) {
       orderService.getNewOrderForCurrentUser().subscribe({
         next: (order) => {
           this.order = order;
         },
         error:() => {
           router.navigateByUrl('/chekcout');
         }
       })
 
    }*/
 
   ngOnInit(): void {
   }
 
 }