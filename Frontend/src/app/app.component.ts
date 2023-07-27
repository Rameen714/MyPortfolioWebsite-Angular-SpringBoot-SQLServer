import { Component } from '@angular/core';
import { LightDarkModeService } from './light-dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private lightDarkModeService: LightDarkModeService) {}
  
  title = 'FirstAngularProject';
  
  // toggleTheme(): void {
  //   this.lightDarkModeService.toggleTheme();
  // }
  // isDarkMode(): boolean {
  //   return this.lightDarkModeService.getTheme() === 'dark';
  // }
}
