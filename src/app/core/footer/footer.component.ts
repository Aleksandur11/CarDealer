import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  visaLogo='assets/pictures/visa-logo.png'
  masterLogo='assets/pictures/master-card.png'
  constructor() { }

  ngOnInit(): void {
  }

}
