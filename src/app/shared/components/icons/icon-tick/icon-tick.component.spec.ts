import { ComponentFixture, TestBed } from "@angular/core/testing"

import { IconTickComponent } from "./icon-tick.component"

describe("IconTickComponent", () => {
	let component: IconTickComponent
	let fixture: ComponentFixture<IconTickComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconTickComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(IconTickComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
