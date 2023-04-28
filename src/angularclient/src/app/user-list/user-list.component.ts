import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  onDelete(e: Event) {
    let value = ((e.target as HTMLButtonElement).value);
    this.userService.deleteUser(value).subscribe(result => this.ngOnInit());
  }

  editUserName(e: Event, user: User) {
    let value = ((e.target as HTMLElement).textContent);
    user.name = value!;
    this.userService.save(user).subscribe(result => this.ngOnInit());
  }

  editUserEmail(e: Event, user: User) {
    let value = ((e.target as HTMLElement).textContent);
    user.email = value!;
    this.userService.save(user).subscribe(result => this.ngOnInit());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
