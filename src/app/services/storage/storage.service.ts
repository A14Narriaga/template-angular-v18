import { DOCUMENT } from "@angular/common"
import { inject, Injectable } from "@angular/core"

@Injectable({
	providedIn: "root"
})
export class StorageService {
	#document = inject(DOCUMENT)
	#localStorage = this.#document.defaultView?.localStorage
	#sessionStorage = this.#document.defaultView?.sessionStorage

	removeLocal(key: string): void {
		this.#localStorage?.removeItem(key)
	}

	setLocal(key: string, value: unknown): unknown {
		this.#localStorage?.setItem(key, JSON.stringify(value))
		return value
	}

	getLocal(key: string, otherwise: unknown): unknown {
		const value = this.#localStorage?.getItem(key)
		try {
			return value ? JSON.parse(value) : otherwise
		} catch {
			return value ?? otherwise
		}
	}

	setSession(key: string, value: unknown): unknown {
		this.#sessionStorage?.setItem(key, JSON.stringify(value))
		return value
	}

	getSession(key: string, otherwise: unknown): unknown {
		const value = this.#sessionStorage?.getItem(key)
		try {
			return value ? JSON.parse(value) : otherwise
		} catch {
			return value ?? otherwise
		}
	}

	setSessionObj(
		key: string,
		init: unknown,
		prop: string,
		value: unknown
	): unknown {
		const storage = {
			...(this.getSession(key, init) as Record<string, unknown>)
		}
		storage[prop] = value
		this.setSession(key, storage)
		return storage[prop]
	}

	getSessionStorageObj(key: string, init: unknown, prop: string): unknown {
		const storage = this.getSession(key, init)
		return (storage as Record<string, unknown>)[prop]
	}
}
