import { Component, OnInit } from '@angular/core';
import { Food } from '../../services/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/user-interface-service/food.service';
import { CartService } from '../../services/user-interface-service/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    });
  }

  ngOnInit(): void { }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  // Method to remove an origin
  removeOrigin(origin: string) {
    const index = this.food.origins.indexOf(origin);
    if (index > -1) {
      this.food.origins.splice(index, 1); // Remove the origin from the array
    }
  }
}