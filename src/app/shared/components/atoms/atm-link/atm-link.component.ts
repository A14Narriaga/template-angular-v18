import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { RouterModule } from "@angular/router"

@Component({
	selector: "atm-link",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./atm-link.component.html"
})
export class AtmLinkComponent {
	@Input() link!: string
	@Input() label!: string
	@Input() align!: "start" | "center" | "end"
}
