import { Component, OnInit } from '@angular/core';
import { Food } from '../../services/models/Food';
import { FoodService } from '../../services/user-interface-service/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRouteroute: ActivatedRoute) {
    activatedRouteroute.params.subscribe((params) =>{
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTearm']);
      else if(params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = foodService.getAll();

      })
  }

  ngOnInit(): void {


    }
  }