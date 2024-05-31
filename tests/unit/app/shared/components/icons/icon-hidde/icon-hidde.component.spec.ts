import { ComponentFixture, TestBed } from "@angular/core/testing"

import { IconHiddeComponent } from "@app/shared"

describe("IconHiddeComponent", () => {
	let component: IconHiddeComponent
	let fixture: ComponentFixture<IconHiddeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconHiddeComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(IconHiddeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
