import { NgModule } from "@angular/core"

import { AtmButtonComponent } from "./atm-button"
import { AtmInputComponent } from "./atm-input"
import { AtmLinkComponent } from "./atm-link"
import { AtmModalComponent } from "./atm-modal"
import { AtmStepperComponent } from "./atm-stepper/atm-stepper.component"

@NgModule({
	imports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent,
		AtmStepperComponent
	],
	exports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent,
		AtmStepperComponent
	]
})
export class AtomsModule {}
