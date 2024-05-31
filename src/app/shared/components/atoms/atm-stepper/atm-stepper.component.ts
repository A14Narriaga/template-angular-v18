import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

import { IconTickComponent } from "../../icons"

@Component({
	selector: "atm-stepper",
	standalone: true,
	imports: [CommonModule, IconTickComponent],
	templateUrl: "./atm-stepper.component.html"
})
export class AtmStepperComponent {
	steps = [
		{
			name: "Step 1",
			done: true
		},
		{
			name: "Step 2",
			done: true
		},
		{
			name: "Step 3",
			done: false
		},
		{
			name: "Step 4",
			done: false
		}
	]
}
