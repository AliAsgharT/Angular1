import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule , Routes} from '@angular/router';
import { NewComponent } from './new/new.component';

const appRoutes: Routes = [
  {
    path: 'new',
    component: NewComponent
  }]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ModalComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
