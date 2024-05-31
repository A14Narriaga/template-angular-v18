import { Injectable, signal } from "@angular/core"

@Injectable({
	providedIn: "root"
})
export class ThemeService {
	private theme = signal("light")

	get get() {
		return this.theme()
	}

	toggleTheme = () => {
		this.theme.update((current) => (current === "dark" ? "light" : "dark"))
	}
}
