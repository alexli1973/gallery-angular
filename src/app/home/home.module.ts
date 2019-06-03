import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CoreModule} from '../core/core.module';
import {LoaderComponent} from '../shared/components/loader/loader.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoaderComponent,
    ImagesListComponent,
    ImageCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
