import { ComponentFixture, TestBed } from "@angular/core/testing"

import { IconShowComponent } from "@app/shared"

describe("IconShowComponent", () => {
	let component: IconShowComponent
	let fixture: ComponentFixture<IconShowComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconShowComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(IconShowComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
