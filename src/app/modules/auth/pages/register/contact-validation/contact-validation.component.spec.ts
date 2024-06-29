import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ContactValidationComponent } from "./contact-validation.component"

describe("ContactValidationComponent", () => {
	let component: ContactValidationComponent
	let fixture: ComponentFixture<ContactValidationComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ContactValidationComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(ContactValidationComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
