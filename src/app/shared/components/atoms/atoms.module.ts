import { NgModule } from "@angular/core"

import { AtmButtonComponent } from "./atm-button"
import { AtmInputComponent } from "./atm-input"
import { AtmInputCodeComponent } from "./atm-input-code"
import { AtmLinkComponent } from "./atm-link"
import { AtmModalComponent } from "./atm-modal"
import { AtmStepperComponent } from "./atm-stepper/atm-stepper.component"

@NgModule({
	imports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent,
		AtmStepperComponent,
		AtmInputCodeComponent
	],
	exports: [
		AtmButtonComponent,
		AtmInputComponent,
		AtmModalComponent,
		AtmLinkComponent,
		AtmStepperComponent,
		AtmInputCodeComponent
	]
})
export class AtomsModule {}
