import { Component } from "@angular/core"

import { SharedModule } from "@app/shared"

@Component({
	selector: "app-register",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./register.component.html"
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RegisterComponent {}
