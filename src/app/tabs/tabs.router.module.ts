import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {ApplicationPagePageModule} from '../application-page/application-page.module';
import {FindPagePageModule} from '../find-page/find-page.module';
import {UserPagePageModule} from '../user-page/user-page.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'find',
        children: [
          {
            path: '',
            loadChildren: '../find-page/find-page.module#FindPagePageModule'
          }
        ]
      },
      {
        path: 'application',
        children: [
          {
            path: '',
            loadChildren: '../application-page/application-page.module#ApplicationPagePageModule'
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: '../user-page/user-page.module#UserPagePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/find',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/find',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
