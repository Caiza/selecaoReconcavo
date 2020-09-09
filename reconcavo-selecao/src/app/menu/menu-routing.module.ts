import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

export const MenuRoutes: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(MenuRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MenuRoutingModule{

}