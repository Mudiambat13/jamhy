import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'equipements', component: EquipmentComponent },
    { path: 'a-propos', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projets', component: ProjectsComponent },
    { path: '**', redirectTo: '' }
];
