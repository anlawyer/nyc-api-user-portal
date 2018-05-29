import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any>;

  constructor(
    private userService: UserService
  ) {
    this.users = userService.usersList;
    userService.usersChange.subscribe((newUsersList) => {
      this.users = newUsersList;
    });
  }

  ngOnInit() {
  }

}
