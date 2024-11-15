export interface Calculator<T, R> {
    calculate(payload: T): R;
}