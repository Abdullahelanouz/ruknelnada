import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesListComponent } from './components/services/services-list.component';
import { ServiceDetailComponent } from './components/services/service-detail.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesListComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];