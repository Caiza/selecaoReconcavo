import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { BairroComponent } from './components/bairro.component';
import { BairroService } from './services/bairro.service';




@NgModule({
    declarations: [BairroComponent],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      RouterModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatTooltipModule,
      MatInputModule,
      MatSnackBarModule,
      FlexLayoutModule,
      MatRadioModule,
      MatToolbarModule,
      MatSelectModule
      
    ],
    providers:[
        BairroService
    ]
  })
export class BairroModule { }