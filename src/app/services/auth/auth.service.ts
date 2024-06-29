import { HttpClient } from "@angular/common/http"
import { computed, inject, Injectable, signal } from "@angular/core"
import { catchError, map, Observable, of, throwError } from "rxjs"
import { environment } from "src/environments/environment"

import { EAuthStatus, ILoginResponse, IUser } from "@app/interfaces"

import { StorageService } from "../storage"

@Injectable({
	providedIn: "root"
})
export class AuthService {
	readonly #apiBaseUrl: string = environment.apiBaseUrl
	#httpClient = inject(HttpClient)
	#storageService = inject(StorageService)
	#currentUser = signal<IUser | null>(null)
	#authStatus = signal<EAuthStatus>(EAuthStatus.CHECKING)

	public currentUser = computed(() => this.#currentUser())
	public authStatus = computed(() => this.#authStatus())

	constructor() {
		this.refreshToken().subscribe()
	}

	#setAutentication(user: IUser, token: string) {
		this.#currentUser.set(user)
		this.#authStatus.set(EAuthStatus.AUTHENTICATED)
		this.#storageService.setLocal("token", token)
	}

	login(email: string, password: string): Observable<boolean> {
		const url = `${this.#apiBaseUrl}/auth/login`
		const body = { email, password }
		return this.#httpClient.post<ILoginResponse>(url, body).pipe(
			map((response) => {
				const { token, ...user } = response
				this.#setAutentication(user, token)
				return true
			}),
			catchError((error) => {
				return throwError(() => error.error.message)
			})
		)
	}

	logout() {
		this.#currentUser.set(null)
		this.#authStatus.set(EAuthStatus.UNAUTHENTICATED)
		this.#storageService.removeLocal("token")
	}

	refreshToken(): Observable<boolean> {
		const url = `${this.#apiBaseUrl}/auth/refresh-token`
		const token = this.#storageService.getLocal("token", null)
		if (token === null) {
			this.logout()
			return of(false)
		}
		const headers = { Authorization: `Bearer ${token}` }
		return this.#httpClient.get<ILoginResponse>(url, { headers }).pipe(
			map((response) => {
				const { token, ...user } = response
				this.#setAutentication(user, token)
				return true
			}),
			catchError(() => {
				this.logout()
				return of(false)
			})
		)
	}
}
