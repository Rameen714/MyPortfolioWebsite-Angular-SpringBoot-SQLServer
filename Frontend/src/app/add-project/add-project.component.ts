import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {


  name: string;
  link: string;
  description: string;

  getName(){
  }

  constructor() { }

  ngOnInit() {
  }

}
