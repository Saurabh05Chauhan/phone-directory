import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { PhoneDirectoryComponent } from './MyComponents/phone-directory/phone-directory.component';

const routes: Routes = [
  { path: '', component: PhoneDirectoryComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
