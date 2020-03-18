import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  loader: boolean = false;

  constructor(public router: Router) { }

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
      'background': '#333333',
    };

    this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#00a8cc'
              },
              shape: {
                  type: 'circle',
              },
              line_linked: {
                enable_auto: true,
                color: '#00a8cc',
                distance: 150,
                opacity: 0.4,
                width: 1
              },
          }
    };
  }
  nav() {
    this.loader= true;
    setTimeout(() => {this.router.navigate(['/dashboard']);}, 3000)
};

}
