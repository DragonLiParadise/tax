export interface Factory<T, R> {
    create(payload: T): R;
}