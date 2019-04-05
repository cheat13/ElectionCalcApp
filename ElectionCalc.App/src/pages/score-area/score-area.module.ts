import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreAreaPage } from './score-area';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ScoreAreaPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScoreAreaPage),
  ],
})
export class ScoreAreaPageModule {}
