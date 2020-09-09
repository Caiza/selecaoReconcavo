import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmaciaComponent } from './components/farmacia/farmacia.component';

export const FarmaciaRoutes: Routes = [
    {
        path: 'farmacia',
        component: FarmaciaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(FarmaciaRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FarmaciaRoutingModule{

}