import { NgModule } from "@angular/core"

import { AtomsModule } from "./atoms"
import { IconsModule } from "./icons"
import { MoleculesModule } from "./molecules"

@NgModule({
	declarations: [],
	imports: [AtomsModule, MoleculesModule, IconsModule],
	exports: [AtomsModule, MoleculesModule, IconsModule]
})
export class ComponentsModule {}
