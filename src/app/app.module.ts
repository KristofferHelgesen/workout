import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutcardComponent } from './workoutcard/workoutcard.component';
import { ListComponent } from './workoutcard/list/list.component';
import { SinglecardComponent } from './singlecard/singlecard.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutcardComponent,
    ListComponent,
    SinglecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
