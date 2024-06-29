import { Component, Input } from "@angular/core"

@Component({
	standalone: true,
	imports: [],
	selector: "atm-button",
	templateUrl: "./atm-button.component.html"
})
export class AtmButtonComponent {
	@Input() label!: string
	@Input() disabled = false
}
