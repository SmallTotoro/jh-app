import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'find-page', loadChildren: './find-page/find-page.module#FindPagePageModule' },
  { path: 'application-page', loadChildren: './application-page/application-page.module#ApplicationPagePageModule' },
  { path: 'user-page', loadChildren: './user-page/user-page.module#UserPagePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
