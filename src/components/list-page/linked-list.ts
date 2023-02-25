export class Node<T> {
    value: T
    next: Node<T> | null
    constructor(value: T, next?: Node<T> | null) {
        this.value = value;
        this.next = (next === undefined ? null : next);
    }
}

interface ILinkedList<T> {
    append: (element: T) => void;
    prepend: (element: T) => void;
    insertAt: (element: T, position: number) => void;
    removeAt: (element: T, index: number) => void;
    getSize: () => number;
}

class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    prepend(element: T): void {}
    removeAt(element: T, index: number): void {}

    insertAt(element: T, index: number) {
        if (index < 0 || index > this.size) {
            console.log('Enter a valid index');
            return;
        } else {
            const node = new Node(element);

            // добавить элемент в начало списка
            if (index === 0) {
                // ваш код ...
                node.next =this.head;
                this.head = node;
            } else {
                let curr: any = this.head;
                let currIndex = 0;

                // перебрать элементы в списке до нужной позиции
                for (let i = 0; i < index-1; i++) {
                    curr = curr.next;
                }

                // добавить элемент
                node.next = curr.next;
                curr.next = node;
            }

            this.size++;
        }
    }

    append(element: T) {
        const node = new Node(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    getSize() {
        return this.size;
    }
}
