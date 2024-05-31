import { Routes } from "@angular/router"

export const routes: Routes = [
	{
		path: "",
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
		loadComponent: () =>
			import("./modules/dashboard").then((co) => co.DashboardComponent)
	},
	{
		path: "",
		redirectTo: "/",
		pathMatch: "full"
	}
]
