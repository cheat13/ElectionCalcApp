import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { CompareComponent } from './compare/compare';
import { DistributionComponent } from './distribution/distribution';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
    declarations: [HomeComponent,
        CompareComponent,
        DistributionComponent],
    imports: [
        IonicPageModule.forChild(HomeComponent),],
    entryComponents: [
        HomeComponent],
    exports: [HomeComponent,
        CompareComponent,
        DistributionComponent]
})
export class ComponentsModule { }
