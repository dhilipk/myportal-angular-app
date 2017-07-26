import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySearchService } from './city-search.service';
import { CitySearchComponent } from './city-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CitySearchComponent],
  providers: [CitySearchService],
  exports: [CitySearchComponent]
})
export class CitySearchModule { }
