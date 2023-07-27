import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../my-projects-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  data: any;

  constructor(private projectService: ProjectService) 
  { }

  fetchData(){
    

    //   this.data = this.http.get('http://localhost:8081/api/projects').pipe(
    //   catchError(error =>{
    //     console.error("eeror occureed", error);
    //     return throwError(error);
    //   })
    // )
    // .subscribe(data => {console.log(data);});

    
  }

  ngOnInit() {
    console.log("HERE 2")
    this.projectService.getProjects().subscribe(
      (d) => {
      console.log(d.project);
      this.data = d.project;
    }
    );
  }
  getImageUrl(imageID: string): string {
    // Assuming the imageID is a base64-encoded string
    return `data:image/jpeg;base64,${imageID}`;
  }

}
