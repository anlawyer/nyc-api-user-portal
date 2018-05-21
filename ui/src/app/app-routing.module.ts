import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';

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
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
