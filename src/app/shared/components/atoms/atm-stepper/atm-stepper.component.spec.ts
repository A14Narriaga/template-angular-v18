import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AtmStepperComponent } from "./atm-stepper.component"

describe("AtmStepperComponent", () => {
	let component: AtmStepperComponent
	let fixture: ComponentFixture<AtmStepperComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AtmStepperComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(AtmStepperComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
