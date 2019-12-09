import { Component, OnInit , ViewChild} from '@angular/core';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  public fontSize = 100;
  public font = '100%';
  public skin = '#eeeeee';
  public fontFamily = 'Xingkai';
  public spacing = '5px'
  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('skin')) {
      this.skin = window.localStorage.getItem('skin');
      this.fontFamily = window.localStorage.getItem('fontFamily');
    }
  }
  upFont() {
    if (this.fontSize > 200) {
    } else {
      this.fontSize = this.fontSize + 20;
      this.font =  this.fontSize + '%';
    }
  }
  downFont() {
    if (this.fontSize < 100) {
    } else {
      this.fontSize = this.fontSize - 20;
      this.font =  this.fontSize + '%';
    }
  }
  changeSkin(value: string) {
    this.skin = value;
    window.localStorage.setItem('skin', this.skin);
  }
  changeFontFamily(value: string) {
    console.log(value)
    this.fontFamily = value;
    console.log(this.fontFamily)
    window.localStorage.setItem('fontFamily', this.fontFamily);
  }
}
