import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AtmInputCodeComponent } from "./atm-input-code.component"

describe("AtmInputCodeComponent", () => {
	let component: AtmInputCodeComponent
	let fixture: ComponentFixture<AtmInputCodeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AtmInputCodeComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(AtmInputCodeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
