import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CoreModule} from '../core/core.module';
import {LoaderComponent} from '../shared/components/loader/loader.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoaderComponent
  ],
  imports: [
   // CommonModule,
    HomeRoutingModule,
    CoreModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
