import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-cars',
  templateUrl: './top-cars.component.html',
  styleUrls: ['./top-cars.component.css']
})
export class TopCarsComponent implements OnInit {
  

   myimage='assets/pictures/picture1.jpg'

  
  constructor() { }

  ngOnInit(): void {
    
  }
   
}
