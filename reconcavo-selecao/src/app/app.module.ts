import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BairroRoutingModule } from './bairro/bairro-routing.module';
import { BairroModule } from './bairro/bairro.module';
import { FarmaciaRoutingModule } from './farmacia/farmacia-routing.module';
import { FarmaciaModule } from './farmacia/farmacia.module';
import { MenuComponent } from './menu/components/menu/menu.component';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { MenuModule } from './menu/menu.module';







@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule, 
    MatInputModule,
    MenuModule,
    FarmaciaModule,
    BairroModule,
    MenuRoutingModule,
    BairroRoutingModule,
    FarmaciaRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
