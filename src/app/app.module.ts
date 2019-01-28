import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
