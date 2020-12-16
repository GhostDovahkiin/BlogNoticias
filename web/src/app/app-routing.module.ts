import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NewsCrudComponent } from './views/news-crud/news-crud.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: NewsCrudComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
