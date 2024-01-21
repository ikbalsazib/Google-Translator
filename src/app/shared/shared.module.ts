import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      space: -5,
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      showSubtitle: false,
    }),
  ],
  exports: [],
  providers: [],
})
export class SharedModule {}
