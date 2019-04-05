import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { CompareComponent } from './compare/compare';
import { DistributionComponent } from './distribution/distribution';
import { IonicPageModule } from 'ionic-angular';
import { HomeScoreAreaComponent } from './home-score-area/home-score-area';
import { CompareScoreAreaComponent } from './compare-score-area/compare-score-area';
@NgModule({
    declarations: [HomeComponent,
        CompareComponent,
        DistributionComponent,
    HomeScoreAreaComponent,
    CompareScoreAreaComponent],
    imports: [
        IonicPageModule.forChild(HomeComponent),],
    entryComponents: [
        HomeComponent],
    exports: [HomeComponent,
        CompareComponent,
        DistributionComponent,
    HomeScoreAreaComponent,
    CompareScoreAreaComponent]
})
export class ComponentsModule { }
