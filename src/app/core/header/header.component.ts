import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MegaMenuModule} from 'primeng/megamenu';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  myLogo='assets/pictures/logo.jpg'

  get isLogged():boolean{
    return this.userService.isLogged
  }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

   loginHandler():void{
     this.userService.login();
   }
   logoutHandler():void{
     this.userService.logout()
   }

}
