import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from '../../../services/models/restaurant';
import { RestaurantService } from '../../../services/services/restaurant.service';

@Component({
  selector: 'app-edit-restaurant-modal',
  templateUrl: './edit-restaurant-modal.component.html',
  styleUrls: ['./edit-restaurant-modal.component.scss']
})
export class EditRestaurantModalComponent {
  @Input() restaurant!: Restaurant; // Definite assignment assertion

  editedRestaurant!: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal
  ) {
    this.editedRestaurant = { ...this.restaurant };
  }

  onSubmit(): void {
    this.restaurantService.updateRestaurant(this.editedRestaurant.id, this.editedRestaurant)
      .subscribe(updatedRestaurant => {
        Object.assign(this.restaurant, updatedRestaurant);
        this.activeModal.close();
      }, error => {
        console.error('Error updating restaurant:', error);
      });
  }
}
