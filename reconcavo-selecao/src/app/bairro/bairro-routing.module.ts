import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BairroComponent } from './components/bairro.component';

export const BairroRoutes: Routes = [
    {
        path: 'bairro',
        component: BairroComponent
        
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(BairroRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BairroRoutingModule{

}