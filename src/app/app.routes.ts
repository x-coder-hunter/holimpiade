import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { DetailsComponent } from './shared/singles/details/details.component';
import { FormationsComponent } from './shared/pages/formations/formations.component';
import { CompetitionsComponent } from './shared/pages/competitions/competitions.component';
import { ContactsComponent } from './shared/pages/contacts/contacts.component';
import { ResumesComponent } from './shared/pages/resumes/resumes.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, },
    { path: "formations", component: FormationsComponent, },
    { path: "competitions", component: CompetitionsComponent, },
    { path: "contacts", component: ContactsComponent, },
    { path: "resume", component: ResumesComponent, },
    { path: "details", component: DetailsComponent },
];
