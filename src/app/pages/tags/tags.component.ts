import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/user-interface-service/food.service';
import { Tag } from '../../services/models/Tag';
import { RestaurantUService } from '../../services/user-interface-service/restaurant-u.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit {
  tags:Tag[]= [];
  constructor(private foodService:FoodService ,private restaurantService:RestaurantUService){
    this.tags = this.foodService.getAllTags();
    this.tags = this.restaurantService.getAllTag();
  }
  ngOnInit(): void {


  }

}