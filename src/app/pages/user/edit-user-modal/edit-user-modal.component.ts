import { Component, Input } from '@angular/core';
import { User } from '../../../services/models/user';
import { UserService } from '../../../services/services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.scss'
})
export class EditUserModalComponent {
  @Input() user!: User; // Definite assignment assertion

  editedUser!: User;

  constructor(
    private userService: UserService,
    public activeModal: NgbActiveModal
  ) {
    this.editedUser = { ...this.user };
  }

  onSubmit(): void {
    this.userService.updateUser(this.editedUser.id, this.editedUser)
      .subscribe(updatedUser => {
        Object.assign(this.user, updatedUser);
        this.activeModal.close();
      }, error => {
        console.error('Error updating user:', error);
      });
  }
}
