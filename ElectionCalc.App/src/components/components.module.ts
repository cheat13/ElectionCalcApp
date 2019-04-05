import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { CompareComponent } from './compare/compare';
import { DistributionComponent } from './distribution/distribution';
import { IonicPageModule } from 'ionic-angular';
import { SortPopoverComponent } from './sort-popover/sort-popover';
import { HomeScoreAreaComponent } from './home-score-area/home-score-area';
import { CompareScoreAreaComponent } from './compare-score-area/compare-score-area';
@NgModule({
    declarations: [HomeComponent,
        CompareComponent,
        DistributionComponent,
        SortPopoverComponent,
        HomeScoreAreaComponent,
        CompareScoreAreaComponent],
    imports: [
        IonicPageModule.forChild(SortPopoverComponent),],
    entryComponents: [
        HomeComponent],
    exports: [HomeComponent,
        CompareComponent,
        DistributionComponent,
        SortPopoverComponent,
        HomeScoreAreaComponent,
        CompareScoreAreaComponent]
})
export class ComponentsModule { }
