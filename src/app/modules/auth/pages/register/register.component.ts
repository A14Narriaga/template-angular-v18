import { Component } from "@angular/core"

import { IStep } from "@app/interfaces"
import { SharedModule } from "@app/shared"

import { ContactValidationComponent } from "./contact-validation"

@Component({
	selector: "app-register",
	standalone: true,
	imports: [ContactValidationComponent, SharedModule],
	templateUrl: "./register.component.html"
})
export class RegisterComponent {
	steps: IStep[] = [
		{
			name: "",
			done: true
		},
		{
			name: "",
			done: true
		},
		{
			name: "",
			done: false
		},
		{
			name: "",
			done: false
		}
	]
}
