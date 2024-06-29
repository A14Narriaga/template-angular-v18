import { Routes } from "@angular/router"

import { isAuthenticatedGuard, isNotAuthenticatedGuard } from "./guards"

export const routes: Routes = [
	{
		path: "",
		canActivate: [isNotAuthenticatedGuard],
		loadComponent: () =>
			import("./modules/auth").then((co) => co.AuthComponent),
		children: [
			{
				path: "login",
				title: "Login",
				loadComponent: () =>
					import("./modules/auth/pages/login").then((co) => co.LoginComponent)
			},
			{
				path: "register",
				title: "Register",
				loadComponent: () =>
					import("./modules/auth/pages/register").then(
						(co) => co.RegisterComponent
					)
			},
			{
				path: "recovery",
				title: "Recovery",
				loadComponent: () =>
					import("./modules/auth/pages/recovery").then(
						(co) => co.RecoveryComponent
					)
			},
			{
				path: "",
				redirectTo: "/login",
				pathMatch: "full"
			}
		]
	},
	{
		path: "dashboard",
		title: "Dashboard",
		canActivate: [isAuthenticatedGuard],
		loadComponent: () =>
			import("./modules/dashboard").then((co) => co.DashboardComponent)
	},
	{
		path: "**",
		loadComponent: () =>
			import("./shared/pages/pag-not-found").then(
				(co) => co.PagNotFoundComponent
			)
	}
]
