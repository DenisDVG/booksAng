import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserRole} from 'src/app/Models/userRole';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  private isStandartUser: boolean;
  private currentUser: User;

  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    if(this.currentUser)
    {
      var user = <User>JSON.parse(localStorage.getItem('currentUser'));
      this.isStandartUser = user.userRole == UserRole.User;
    }
     
  }

  ngOnInit() {
  }

}
