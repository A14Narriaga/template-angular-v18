import { NgModule } from "@angular/core"

import { PagLoadingComponent } from "./pag-loading"
import { PagNotFoundComponent } from "./pag-not-found"

@NgModule({
	declarations: [],
	imports: [PagLoadingComponent, PagNotFoundComponent],
	exports: [PagLoadingComponent, PagNotFoundComponent]
})
export class PagesModule {}
