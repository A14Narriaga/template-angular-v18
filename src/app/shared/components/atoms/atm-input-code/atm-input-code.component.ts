import { Component, Input } from "@angular/core"

import { getEmptyArray } from "@app/utilities"

@Component({
	selector: "atm-input-code",
	standalone: true,
	imports: [],
	templateUrl: "./atm-input-code.component.html",
	styleUrl: "./atm-input-code.component.scss"
})
export class AtmInputCodeComponent {
	@Input() numOfDigits!: number

	// @ViewChildren("digitInput") digitInputs!: QueryList<any>

	get digits() {
		return getEmptyArray(this.numOfDigits)
	}

	// onInput(event: any, index: number): void {
	// 	const input = event.target
	// 	const value = input.value

	// 	if (value.length === 1 && index < this.digitInputs.length - 1) {
	// 		this.digitInputs.toArray()[index + 1].nativeElement.focus()
	// 	}
	// }
}
