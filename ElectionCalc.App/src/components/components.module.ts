import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { CompareComponent } from './compare/compare';
import { DistributionComponent } from './distribution/distribution';
import { IonicPageModule } from 'ionic-angular';
import { SortPopoverComponent } from './sort-popover/sort-popover';
@NgModule({
    declarations: [HomeComponent,
        CompareComponent,
        DistributionComponent,
    SortPopoverComponent],
    imports: [
        IonicPageModule.forChild(SortPopoverComponent),],
    entryComponents: [
        HomeComponent],
    exports: [HomeComponent,
        CompareComponent,
        DistributionComponent,
    SortPopoverComponent]
})
export class ComponentsModule { }
