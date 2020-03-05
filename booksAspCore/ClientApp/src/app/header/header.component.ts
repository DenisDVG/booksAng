import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import {UserRole} from 'src/app/Models/userRole';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle: string = "Books UA";
  currentUser: User;


  private isStandartUser: boolean;



  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    if(this.currentUser)
    {
      var user = <User>JSON.parse(localStorage.getItem('currentUser'));
      this.isStandartUser = user.userRole == UserRole.User;
    }
  }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
