import { ComponentFixture, TestBed } from "@angular/core/testing"

import { MolVerificationCodeComponent } from "./mol-verification-code.component"

describe("MolVerificationCodeComponent", () => {
	let component: MolVerificationCodeComponent
	let fixture: ComponentFixture<MolVerificationCodeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MolVerificationCodeComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(MolVerificationCodeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
