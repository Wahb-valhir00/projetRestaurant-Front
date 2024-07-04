import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../services/models/restaurant';
import { RestaurantUService } from '../../services/user-interface-service/restaurant-u.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/user-interface-service/cart.service';

@Component({
  selector: 'app-restautrant-page',
  templateUrl: './restautrant-page.component.html',
  styleUrl: './restautrant-page.component.scss'
})
export class RestautrantPageComponent implements OnInit {


  restaurants!: Restaurant;

res: any;
  restaurant!: Restaurant;
  constructor(private restaurantService: RestaurantUService
, activatedRouteroute: ActivatedRoute , private cartService:CartService , private router: Router){
       activatedRouteroute.params.subscribe((params) =>{
      if (params['id'])
        this.restaurant = restaurantService.getAllRestaurantsById(params['id']);


      })

  }

  ngOnInit(): void {


    }
  
    addToCartt(){

      this.cartService['addToCartt'](this.res);
      this.router.navigateByUrl('/cart-page');


    }

  }