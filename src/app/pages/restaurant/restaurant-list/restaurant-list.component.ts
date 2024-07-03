import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from '../../../services/models/restaurant';
import { RestaurantService } from '../../../services/services/restaurant.service';
import { EditRestaurantModalComponent } from '../edit-restaurant-modal/edit-restaurant-modal.component';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  filterText: string = '';

  constructor(private restaurantService: RestaurantService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

  editRestaurant(restaurant: Restaurant): void {
    const modalRef = this.modalService.open(EditRestaurantModalComponent, { size: 'lg' });
    modalRef.componentInstance.restaurant = restaurant;

    modalRef.result.then((result) => {
      // Modal closed with a result
      if (result === 'saved') {
        this.loadRestaurants(); // Reload restaurants after saving changes
      }
    }, (reason) => {
      // Modal dismissed
      console.log(`Dismissed with reason: ${reason}`);
    });
  }

  deleteRestaurant(id: string): void {
    this.restaurantService.deleteRestaurant(id).subscribe(() => {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== id);
    });
  }

  filteredRestaurants(): Restaurant[] {
    if (!this.filterText) {
      return this.restaurants;
    }
    return this.restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
