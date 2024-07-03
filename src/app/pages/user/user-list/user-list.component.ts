import { Component, OnInit } from '@angular/core';
import { User } from '../../../services/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/services/user.service';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent  implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  filterString: string = '';
  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users=users;
      this.filteredUsers = users; // Initialize filteredUsers with all users
    });
  }
  
  filterUsers(): void {
    if (this.filterString) {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(this.filterString.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

  editUsers(user: User): void {
    const modalRef = this.modalService.open(EditUserModalComponent, { size: 'lg' });
    modalRef.componentInstance.user = user;

    modalRef.result.then((result) => {
      // Modal closed with a result
      if (result === 'saved') {
        this.loadUsers(); // Reload restaurants after saving changes
      }
    }, (reason) => {
      // Modal dismissed
      console.log(`Dismissed with reason: ${reason}`);
    });
  }

  deleteUsers(id: string): void {
    this.userService.deleteUsers(id).subscribe(() => {
      this.users = this.users.filter(users=> users.id !== id);
    });
  }
}
