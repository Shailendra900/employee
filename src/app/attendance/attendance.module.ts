import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core'; // For using native date format
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UpdataComponent } from './updata/updata.component';


@NgModule({
  declarations: [
    AttendanceListComponent,
    AttendanceAddComponent,
    UpdataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AttendanceModule { }
