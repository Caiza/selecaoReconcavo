import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';



@NgModule({
    declarations: [MenuComponent],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      RouterModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule,
      MatToolbarModule,
 
      
    ],
    providers:[
    ]
  })
export class MenuModule{ }