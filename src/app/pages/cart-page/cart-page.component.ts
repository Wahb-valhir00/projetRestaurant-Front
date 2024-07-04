import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/models/Cart';
import { CartService } from '../../services/user-interface-service/cart.service';
import { CartItem } from '../../services/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
 constructor(private cartService: CartService) {
   this.cartService.getCartObservable().subscribe((cart) =>{
     this.cart = cart;
   })
 }
ngOnInit(): void {

}

removeFromCart(cartItem:CartItem){
 this.cartService.removeFromCart(cartItem.food.id);
}
changeQuantity(cartItem:CartItem,quantityInString:string){
 const quantity = parseInt(quantityInString);
 this.cartService.changeQuantity(cartItem.food.id, quantity);
}
}