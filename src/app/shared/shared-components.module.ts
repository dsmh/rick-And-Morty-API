import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';


@NgModule({
  declarations: [AllCharactersComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent]
})
export class SharedComponentsModule { }
