export interface Handler<T, R extends any = void> {
    handle(payload: T): R;
}