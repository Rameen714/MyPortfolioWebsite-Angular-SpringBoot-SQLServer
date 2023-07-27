import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })

export class ProjectService{
    private apiUrlGet = 'http://localhost:8081/api/projects';
    private apiUrlAdd = 'http://localhost:8081/api/add';
    
    constructor(private http:HttpClient){}

    getProjects(){
        console.log("HERE")
        return this.http.get<any>(this.apiUrlGet);
    }

    addProject(){
        console.log("HERE")
        return this.http.post<any>(this.apiUrlAdd, {});
    }
}