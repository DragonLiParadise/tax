export class Registry<T> {
    protected items: T[] = [];

    constructor(items: T[] = []) {
        this.items = items;
    }

    get length(): number {
        return this.items.length;
    }

    register(item: T): void {
        this.items.push(item);
    }

    delete(item: T) {
        this.items = this.items.filter(existItem => existItem !== item);
    }

    all(): T[] {
        return this.items;
    }

    clear() {
        this.items = [];
    }

    forEach(callback: (item: T) => void) {
        this.items.forEach(callback);
    }
}