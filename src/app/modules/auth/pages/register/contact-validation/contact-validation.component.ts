import { Component } from "@angular/core"

import { ModalService } from "@app/services"
import { SharedModule } from "@app/shared"

@Component({
	selector: "app-contact-validation",
	standalone: true,
	imports: [SharedModule],
	templateUrl: "./contact-validation.component.html",
	styleUrl: "./contact-validation.component.scss"
})
export class ContactValidationComponent {
	constructor(private modalServide: ModalService) {}

	handleOpen = (id: string) => this.modalServide.open(id)
}
