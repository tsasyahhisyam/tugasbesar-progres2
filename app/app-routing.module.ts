import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router } from '@angular/router';
import { DvdComponent } from './dvd/dvd.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DvdStartComponent } from './dvd/dvd-detail/dvd-list/dvd-item/dvd-start/dvd-start.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdEditComponent } from './dvd/dvd-detail/dvd-list/dvd-item/dvd-start/dvd-edit/dvd-edit.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/dvds',pathMatch:'full'},
    {path:'dvds',component:DvdComponent,children:[
    {path:'',component:DvdStartComponent},
    {path:'new',component:DvdEditComponent},
    {path:':id',component:DvdDetailComponent},
    {path:':id/edit',component:DvdEditComponent},
    ]},
    {path:'order-list',component:OrderListComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}