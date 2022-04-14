import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { TopCarsComponent } from './top-cars/top-cars.component';



@NgModule({
  declarations: [ SliderComponent,
    TopCarsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    TopCarsComponent
  ]
})
export class HomepageModule { }
