import {Registry} from "../Registry";
import {Handler} from "../interfaces";

export class HandlerRegistry<T> extends Registry<Handler<T>> implements Handler<T> {
    constructor(items: Handler<T>[] = []) {
        super(items);
    }

    handle(payload: T): void {
        this.forEach(item => {
            item.handle(payload);
        })
    }
}