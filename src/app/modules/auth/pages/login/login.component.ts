import { Component } from "@angular/core"
import {
	FormGroup,
	ReactiveFormsModule,
	UntypedFormBuilder,
	Validators
} from "@angular/forms"
import { Router } from "@angular/router"

import { SharedModule } from "@app/shared"

@Component({
	selector: "app-login",
	standalone: true,
	imports: [SharedModule, ReactiveFormsModule],
	templateUrl: "./login.component.html"
})
export class LoginComponent {
	public showPassword = false
	public formGroup: FormGroup = this.formBuilder.group({
		// email: [getLocalStorage("email", ""), Validators.required],
		email: ["", Validators.required],
		password: ["", [Validators.required]]
	})

	constructor(
		private formBuilder: UntypedFormBuilder,
		private router: Router
	) {}

	login() {
		if (!this.formGroup.valid) {
			this.formGroup.markAllAsTouched()
			// console.log("LOGIN", this.formGroup.value)
			return this.formGroup.value
		}
	}

	navigateTo(url: string) {
		// console.log("URL", url)
		this.router.navigateByUrl(url)
	}
}
