import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../module/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.users$ = this.userService.getUsers();
    console.log(this.users$);
  }

}
