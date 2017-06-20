import { Router, RouterModule } from '@angular/router';

import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';

/*
    this is a child module so instead of using forRoot(), we use forChild()
*/
export const photosRouting = RouterModule.forChild([
    { path: 'photos', component: PhotosComponent },
    { path: 'photos/:id', component: PhotoDetailsComponent },
]);