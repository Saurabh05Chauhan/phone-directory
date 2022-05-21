import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { PhoneDirectoryComponent } from './MyComponents/phone-directory/phone-directory.component';
import { AddContactComponent } from './MyComponents/add-contact/add-contact.component';
import { ViewContactComponent } from './MyComponents/view-contact/view-contact.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhoneDirectoryComponent,
    AddContactComponent,
    ViewContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
