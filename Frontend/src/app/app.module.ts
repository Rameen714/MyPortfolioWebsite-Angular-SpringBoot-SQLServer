import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatMenu,MatButton, MatSidenav,MatSlideToggleModule,MatCard, MatCardModule, MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
