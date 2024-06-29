import { Component, inject } from "@angular/core"
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from "@angular/forms"
import { Router } from "@angular/router"

import { AuthService } from "@app/services"
import { SharedModule } from "@app/shared"

@Component({
	selector: "app-login",
	standalone: true,
	imports: [SharedModule, ReactiveFormsModule],
	templateUrl: "./login.component.html"
})
export class LoginComponent {
	private formBuilder = inject(FormBuilder)
	private authService = inject(AuthService)
	private router = inject(Router)

	public formGroup: FormGroup = this.formBuilder.group({
		// email: [getLocalStorage("email", ""), Validators.required],
		email: ["a14n.arriaga@gmail.com", [Validators.required, Validators.email]],
		password: ["A14Narriaga", [Validators.required, Validators.minLength(8)]]
	})
	public showPassword = false

	login() {
		if (this.formGroup.invalid) this.formGroup.markAllAsTouched()
		const { email, password } = this.formGroup.value
		this.authService.login(email, password).subscribe({
			next: () => this.router.navigateByUrl("/dashboard"),
			error: (error) => console.log(error)
		})
	}
}
