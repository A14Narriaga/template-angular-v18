import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

import { IStep } from "@app/interfaces"

import { IconTickComponent } from "../../icons"

@Component({
	selector: "atm-stepper",
	standalone: true,
	imports: [CommonModule, IconTickComponent],
	templateUrl: "./atm-stepper.component.html"
})
export class AtmStepperComponent {
	@Input() steps!: IStep[]
}
