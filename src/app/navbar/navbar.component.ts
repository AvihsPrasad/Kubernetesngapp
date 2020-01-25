import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message: boolean = false;
  // @Input() childMessage: boolean
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  
  sendMessage() {
    this.message = !this.message;
    this.messageEvent.emit(this.message)
  }
}
