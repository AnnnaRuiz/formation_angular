import { Routes } from '@angular/router';
import { FacesnapList } from './facesnap-list/facesnap-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleFacesnap } from './single-facesnap /single-facesnap';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'facesnaps', component: FacesnapList},
    {path: 'facesnaps/:id', component: SingleFacesnap },
];
