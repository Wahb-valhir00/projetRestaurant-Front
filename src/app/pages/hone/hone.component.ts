import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../services/models/restaurant';
import { RestaurantUService } from '../../services/user-interface-service/restaurant-u.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hone',
  templateUrl: './hone.component.html',
  styleUrl: './hone.component.scss'
})
export class HoneComponent implements OnInit {


  restaurants: Restaurant[] = [];

res: any;
  constructor(private restaurantService: RestaurantUService
, activatedRouteroute: ActivatedRoute ){
       activatedRouteroute.params.subscribe((params) =>{
      if (params['searchTerm'])
        this.restaurants = this.restaurantService.getAllRestaurantsBySearchTerm(params['searchTearm']);
      else if(params['tag'])
        this.restaurants = this.restaurantService.getAllFoodsByTag(params['tag']);
      else
        this.restaurants = restaurantService.getAll();

      })

  }

  ngOnInit(): void {


    }

  }