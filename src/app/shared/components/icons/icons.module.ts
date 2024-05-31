import { NgModule } from "@angular/core"

import { IconEnvelopeComponent } from "./icon-envelope"
import { IconHiddeComponent } from "./icon-hidde"
import { IconKeyComponent } from "./icon-key"
import { IconShowComponent } from "./icon-show"
import { IconTickComponent } from "./icon-tick/icon-tick.component"

@NgModule({
	declarations: [],
	imports: [
		IconEnvelopeComponent,
		IconHiddeComponent,
		IconKeyComponent,
		IconShowComponent,
		IconTickComponent
	],
	exports: [
		IconEnvelopeComponent,
		IconHiddeComponent,
		IconKeyComponent,
		IconShowComponent,
		IconTickComponent
	]
})
export class IconsModule {}
