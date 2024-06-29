import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AtmButtonComponent } from "@app/shared"

describe("AtmButtonComponent", () => {
	let component: AtmButtonComponent
	let fixture: ComponentFixture<AtmButtonComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AtmButtonComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(AtmButtonComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
