import { Component } from "@angular/core"

import { ThemeService } from "@app/services"
import { SharedModule } from "@app/shared"

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
	constructor(public themeService: ThemeService) {}
}
