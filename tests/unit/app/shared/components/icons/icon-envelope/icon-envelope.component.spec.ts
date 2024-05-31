import { ComponentFixture, TestBed } from "@angular/core/testing"

import { IconEnvelopeComponent } from "@app/shared"

describe("IconEnvelopeComponent", () => {
	let component: IconEnvelopeComponent
	let fixture: ComponentFixture<IconEnvelopeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconEnvelopeComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(IconEnvelopeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
