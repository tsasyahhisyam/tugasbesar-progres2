import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DvdComponent } from './dvd/dvd.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DvdListComponent } from './dvd/dvd-detail/dvd-list/dvd-list.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdItemComponent } from './dvd/dvd-detail/dvd-list/dvd-item/dvd-item.component';
import { OrderEditComponent } from './order-list/order-edit/order-edit.component';
import { DvdService } from './dvd/dvd.service';
import { DvdEditComponent } from './dvd/dvd-detail/dvd-list/dvd-item/dvd-start/dvd-edit/dvd-edit.component';
import { DvdStartComponent } from './dvd/dvd-detail/dvd-list/dvd-item/dvd-start/dvd-start.component';
import { OrderListService } from './order-list/order-list.service';
import { DataStorageService } from './shared/data-storage.service';
import { DropdownDirective } from '../app/shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DvdComponent,
    OrderListComponent,
    DvdListComponent,
    DvdDetailComponent,
    DvdItemComponent,
    OrderEditComponent,
    DvdStartComponent,
    DvdEditComponent,
    DropdownDirective
],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [OrderListService, DvdService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
