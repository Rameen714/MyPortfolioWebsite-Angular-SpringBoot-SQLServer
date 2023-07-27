import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  variable = "Juts like that i have created a variable in new-cmp.component.ts file";
  
  months =["Jan","Feb","Mar","Apr"];

  isAvailable = false;

  d = new Date();

  myClickFunction(event){
    alert("Button is clicked");
    this.isAvailable = !this.isAvailable;
  }
  changemonths(event){
    alert("Month changed");
  }

  constructor() { }

  ngOnInit() {
  }

}
