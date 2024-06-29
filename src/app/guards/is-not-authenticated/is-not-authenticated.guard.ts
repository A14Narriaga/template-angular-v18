import { inject } from "@angular/core"
import { CanActivateFn } from "@angular/router"

import { EAuthStatus } from "@app/interfaces"
import { AuthService } from "@app/services"

export const isNotAuthenticatedGuard: CanActivateFn = () => {
	const authService = inject(AuthService)
	const authStatus = authService.authStatus()
	if (authStatus === EAuthStatus.UNAUTHENTICATED) return true
	return false
}
