import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs"

@Injectable({
	providedIn: "root"
})
export class ModalService {
	#isOpenMap: Map<string, BehaviorSubject<boolean>> = new Map<
		string,
		BehaviorSubject<boolean>
	>()

	#getIsOpenMapObservable(modalID: string): BehaviorSubject<boolean> {
		let subject = this.#isOpenMap.get(modalID)
		if (!subject) {
			subject = new BehaviorSubject<boolean>(false)
			this.#isOpenMap.set(modalID, subject)
		}
		return subject
	}

	open(modalID: string) {
		this.#getIsOpenMapObservable(modalID).next(true)
	}

	close(modalID: string) {
		this.#getIsOpenMapObservable(modalID).next(false)
	}

	$isOpen(modalID: string): Observable<boolean> {
		return this.#getIsOpenMapObservable(modalID).asObservable()
	}
}
