import { NgModule } from "@angular/core"

import { MolHeaderComponent } from "./mol-header"
import { MolVerificationCodeComponent } from "./mol-verification-code"

@NgModule({
	imports: [MolHeaderComponent, MolVerificationCodeComponent],
	exports: [MolHeaderComponent, MolVerificationCodeComponent]
})
export class MoleculesModule {}
