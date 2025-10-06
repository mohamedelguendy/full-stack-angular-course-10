import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ fixes ngFor + ngModel
  templateUrl: './user-list.html'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return;

    this.userService.addUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { name: '', email: '' };
      alert('User added successfully!');
    });
  }
}

