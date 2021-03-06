import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },{
    path: 'user/list',
    component: UserListComponent
  },{
    path: 'user/new',
    component: UserNewComponent
  },{
    path: 'user/edit/:id',
    component: UserEditComponent
  },{
    path: 'map',
    component: MapPageComponent
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
