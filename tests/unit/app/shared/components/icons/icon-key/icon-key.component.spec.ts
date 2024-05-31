import { ComponentFixture, TestBed } from "@angular/core/testing"

import { IconKeyComponent } from "@app/shared"

describe("IconKeyComponent", () => {
	let component: IconKeyComponent
	let fixture: ComponentFixture<IconKeyComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconKeyComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(IconKeyComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
