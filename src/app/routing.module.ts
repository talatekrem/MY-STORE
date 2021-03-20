import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './product/components/product-detail/product-detail.component';
import {ProductListComponent} from './product/components/product-list/product-list.component';
import {NotFoundPageComponent} from './product/components/404-page/404-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
   path: 'not-found',
   component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class RoutingModule { }
