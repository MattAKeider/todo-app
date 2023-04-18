import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { SelectStyleDirective } from './shared/directives/select-style.directive';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddItemComponent,
    SelectStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'todo-app'),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
