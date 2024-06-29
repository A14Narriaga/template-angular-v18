import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PagLoadingComponent } from "./pag-loading.component"

describe("PagLoadingComponent", () => {
	let component: PagLoadingComponent
	let fixture: ComponentFixture<PagLoadingComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PagLoadingComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(PagLoadingComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
