import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { RoundBlockDirective } from './directives/round-block.directive';
import { FullnamePipe } from './pipes/fullname.pipe';

@NgModule({
  declarations: [
    CatFactsComponent,
    RoundBlockDirective,
    FullnamePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CatFactsComponent,
    RoundBlockDirective,
    FullnamePipe
  ]
})
export class ShailendraAngularLibraryModule { }
