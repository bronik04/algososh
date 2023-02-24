interface IStack<T> {
    push: (item: T) => void;
    pop: () => void;
    peak: () => T | null;
    getSize: () => number;
    clear: () => void;
}

export class Stack<T> implements IStack<T> {
    private container: T[] = [];

    push = (item: T): void => {
        this.container.push(item);
    };

    pop = (): void => {
        this.container.pop();
    };

    peak = (): T | null => {
        if (this.container.length) {
            return this.container[this.container.length -1];
        }
        return null;
    };

    clear = () => {
        this.container = [];
    }

    getSize = () => this.container.length;
}
