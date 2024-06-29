import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"

import { EAuthStatus } from "@app/interfaces"
import { AuthService, StorageService } from "@app/services"

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
	const { url } = state
	const authService = inject(AuthService)
	const storageService = inject(StorageService)
	const router = inject(Router)
	const authStatus = authService.authStatus()
	if (authStatus === EAuthStatus.AUTHENTICATED) return true
	storageService.setLocal("url", url)
	router.navigateByUrl("/login")
	return false
}
