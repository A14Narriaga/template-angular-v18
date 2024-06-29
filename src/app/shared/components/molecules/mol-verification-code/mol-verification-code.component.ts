import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

import { AtomsModule } from "../../atoms"

@Component({
	selector: "mol-verification-code",
	standalone: true,
	imports: [CommonModule, AtomsModule],
	templateUrl: "./mol-verification-code.component.html",
	styleUrl: "./mol-verification-code.component.scss"
})
export class MolVerificationCodeComponent {
	@Input() id!: string
	@Input() source!: string
	@Input() numOfDigits = 4
}
