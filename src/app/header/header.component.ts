import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
    isScrolled = false;
	currPos: Number = 0;
	startPos: Number = 0;
	changePos: Number = 10;
  
  updateHeader(evt) {
	    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
	    if(this.currPos >= this.changePos ) {
	        this.isScrolled = true;
	    } else {
	        this.isScrolled = false;
	    }
	}

}
