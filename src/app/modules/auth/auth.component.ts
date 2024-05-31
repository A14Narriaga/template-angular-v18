import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

import { ModalService } from "@app/services"

@Component({
	selector: "app-auth",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./auth.component.html"
})
export class AuthComponent {
	constructor(public modalService: ModalService) {}
	handleOpenModal(modalID: string) {
		this.modalService.open(modalID)
	}

	handleCloseModal(modalID: string) {
		this.modalService.close(modalID)
	}
}
