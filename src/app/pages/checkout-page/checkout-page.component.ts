import { Component, OnInit } from '@angular/core';
import { Order } from '../../services/models/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/user-interface-service/cart.service';
import { UserServiceService } from '../../services/user-interface-service/user-service.service';
import { ToastrServiceService } from '../../services/user-interface-service/toastr-service.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit {
  order:Order = new Order();
  checkoutForm!: FormGroup;
  constructor(cartService:CartService,
     private formBuilder: FormBuilder,
     private userService: UserServiceService,
     private toastrService: ToastrServiceService ){
      const cart =cartService.getCart();
      this.order.items = cart.items;
      this.order.totalPrice = cart.totalPrice;
       }

  ngOnInit(): void {
    let{name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required]
    });




  }

  get fc(){
    return this.checkoutForm.controls;
  }
  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs','Invalid Inputs');
      return;

    }
    this.order.name = this.fc['name'].value;
    this.order.adress = this.fc['address'].value;
    console.log(this.order);


  }
}