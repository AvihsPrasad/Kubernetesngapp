import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#be9fe1'
              },
              shape: {
                  type: 'circle',
              },
              line_linked: {
                enable_auto: true,
                color: '#c9b6e4',
                distance: 150,
                opacity: 0.4,
                width: 1
              },
          }
    };
  }

}
