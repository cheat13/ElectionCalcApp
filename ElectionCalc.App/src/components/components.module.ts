import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { CompareComponent } from './compare/compare';
import { DistributionComponent } from './distribution/distribution';
@NgModule({
	declarations: [HomeComponent,
    CompareComponent,
    DistributionComponent],
	imports: [],
	exports: [HomeComponent,
    CompareComponent,
    DistributionComponent]
})
export class ComponentsModule {}
