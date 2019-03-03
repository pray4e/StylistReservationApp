import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule } from '@angular/material';
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
      
   ], 

   exports: [
      MatButtonModule, 
      MatIconModule,
      MatFormFieldModule, 
      MatInputModule,
      MatNativeDateModule,
      MatDatepickerModule
   ] 
})
export class MaterialModule {}