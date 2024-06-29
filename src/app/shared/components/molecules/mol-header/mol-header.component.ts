import { Component, inject } from "@angular/core"

import { AuthService, ThemeService } from "@app/services"

import { AtomsModule } from "../../atoms"

@Component({
	selector: "mol-header",
	standalone: true,
	imports: [AtomsModule],
	templateUrl: "./mol-header.component.html"
})
export class MolHeaderComponent {
	#authService = inject(AuthService)

	constructor(public themeService: ThemeService) {}

	onLogout() {
		this.#authService.logout()
	}
}
