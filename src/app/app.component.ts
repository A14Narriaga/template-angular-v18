import { Component, computed, effect, inject } from "@angular/core"
import { Router, RouterOutlet } from "@angular/router"

import { EAuthStatus } from "./interfaces"
import { AuthService, StorageService } from "./services"
import { PagesModule } from "./shared"

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, PagesModule],
	templateUrl: "./app.component.html"
})
export class AppComponent {
	#authService = inject(AuthService)
	#storageService = inject(StorageService)
	#router = inject(Router)

	public finishedAuthCheck = computed<boolean>(() => {
		return this.#authService.authStatus() !== EAuthStatus.CHECKING
	})

	public authStatusChangedEffect = effect(() => {
		const authStatus = this.#authService.authStatus()
		if (authStatus === EAuthStatus.AUTHENTICATED) {
			const url = this.#storageService?.getLocal("url", "/dashboard") as string
			this.#storageService?.removeLocal("url")
			this.#router.navigateByUrl(url)
		} else if (authStatus === EAuthStatus.UNAUTHENTICATED) {
			this.#router.navigateByUrl("/login")
		}
	})
}
