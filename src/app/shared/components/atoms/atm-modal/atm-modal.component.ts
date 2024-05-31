import { CommonModule } from "@angular/common"
import { Component, ElementRef, Input } from "@angular/core"

import { ModalService } from "@app/services"

@Component({
	standalone: true,
	imports: [CommonModule],
	selector: "atm-modal",
	templateUrl: "./atm-modal.component.html"
})
export class AtmModalComponent {
	@Input() id!: string
	@Input() canClose = true

	constructor(
		public modalService: ModalService,
		private elementRef: ElementRef<HTMLElement>
	) {}

	get $isOpen() {
		return this.modalService.$isOpen(this.id)
	}

	close = () => this.modalService.close(this.id)

	handleOverlayClick(event: MouseEvent) {
		const target = event.target as HTMLElement
		const modalContent = this.elementRef.nativeElement.querySelector(
			".modal-content"
		) as HTMLElement
		if (!modalContent.contains(target)) {
			this.close()
		}
	}
}
