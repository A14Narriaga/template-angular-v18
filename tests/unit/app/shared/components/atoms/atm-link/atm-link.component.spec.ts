import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from "@angular/router"
import { of } from "rxjs"

import { AtmLinkComponent } from "@app/shared"

describe("AtmLinkComponent", () => {
	let component: AtmLinkComponent
	let fixture: ComponentFixture<AtmLinkComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AtmLinkComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							paramMap: {
								get: () => "someId"
							}
						},
						params: of({ id: "someId" })
					}
				}
			]
		}).compileComponents()

		fixture = TestBed.createComponent(AtmLinkComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
