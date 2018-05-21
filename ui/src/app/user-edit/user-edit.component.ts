import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;
  currID: any;

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => this.currID = param.id )
    this.UserService.getOneUser(this.currID)
    .subscribe(res => console.log(res))
  }

}
