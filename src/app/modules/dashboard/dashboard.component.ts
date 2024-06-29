import { CommonModule } from "@angular/common"
import { Component, computed, inject } from "@angular/core"

import { AuthService } from "@app/services"
import { SharedModule } from "@app/shared"

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [CommonModule, SharedModule],
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
	#authService = inject(AuthService)

	public user = computed(() => this.#authService.currentUser())
}
