import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatMenu,MatButton, MatSidenav,MatSlideToggleModule,MatCard, MatCardModule, MatToolbarModule, MatIconModule, MatGridListModule,MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    RoutingComponent,
    LoginComponent,
    AddProjectComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
