import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  imgurl = 'url(\'../assets/Tuscany, Ital.jpg\')';

  ngOnInit() {
  }

}
