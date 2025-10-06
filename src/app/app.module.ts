import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app'; 
import { UserListComponent } from './components/user-list/user-list'; 

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
})
export class AppModule {}
