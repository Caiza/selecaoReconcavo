import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
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

import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { FarmaciaService } from './services/Farmacia.service';





@NgModule({
    declarations: [FarmaciaComponent],
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
      MatRadioModule,
      MatDatepickerModule,
      MatSelectModule,
      
    ],
    providers:[
      FarmaciaService
    ]
  })
export class FarmaciaModule{ }