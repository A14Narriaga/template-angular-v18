import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from "@angular/router"
import { of } from "rxjs"

import { LoginComponent } from "@app/modules"

describe("LoginComponent", () => {
	let component: LoginComponent
	let fixture: ComponentFixture<LoginComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginComponent],
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

		fixture = TestBed.createComponent(LoginComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
