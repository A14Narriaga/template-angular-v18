import { NgModule } from "@angular/core"

import { ComponentsModule } from "./components"
import { PagesModule } from "./pages"

@NgModule({
	declarations: [],
	imports: [ComponentsModule, PagesModule],
	exports: [ComponentsModule, PagesModule]
})
export class SharedModule {}
