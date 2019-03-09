import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatCardModule, MatSelectModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material'

@NgModule({

   imports: [
      MatButtonModule, 
      MatIconModule, 
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatCardModule,
      MatSelectModule,
      MatListModule,

   ], 

   exports: [
      MatButtonModule, 
      MatIconModule,
      MatFormFieldModule, 
      MatInputModule,
      MatNativeDateModule,
      MatDatepickerModule, 
      MatCardModule,
      MatSelectModule,
      MatListModule
   ] 
})
export class MaterialModule {}