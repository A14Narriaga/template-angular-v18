import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormGroup, ReactiveFormsModule } from "@angular/forms"

import { IconsModule } from "../../icons"

@Component({
	selector: "atm-input",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, IconsModule],
	templateUrl: "./atm-input.component.html"
})
export class AtmInputComponent {
	@Input() label!: string
	@Input() type!: string
	@Input() placeholder = ""
	@Input() formGroupParent!: FormGroup
	@Input() formControlNameParent!: string
	@Input() errorMsg!: string
	@Input() required!: boolean
	@Input() maxlength!: number
	@Input() helperText!: string
	@Input() isAsync!: boolean
	@Input() paste = true

	handleNotPaste(event: Event) {
		event.preventDefault()
	}
}
