export class Node<T> {
    value: T
    next: Node<T> | null

    constructor(value: T, next?: Node<T> | null) {
        this.value = value;
        this.next = (next === undefined ? null : next);
    }
}

interface ILinkedList<T> {
    prepend: (element: T) => void;
    append: (element: T) => void;
    insertAt: (element: T, position: number) => void;
    removeByIndex: (index: number) => void;
    removeFromHead: () => void;
    removeFromTail: () => void;
    isEmpty: () => boolean;
    getSize: () => number;
    print: () => void;
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

    isEmpty = () => this.size === 0;

    insertAt(element: T, index: number) {
        if (index < 0 || index > this.size) {
            console.log('Enter a valid index');
            return;
        } else {
            if (index === 0) {
                this.prepend(element);
            } else {
                const node = new Node(element);
                let curr: any = this.head;

                for (let i = 0; i < index - 1; i++) {
                    curr = curr.next;
                }
                node.next = curr.next;
                curr.next = node;
            }
            this.size++;
        }
    }

    removeByIndex(index: number) {
        if (index < 0 || index > this.size) {
            console.log('Enter a valid index');
            return;
        }
        let currentNode = this.head;
        if (index === 0 && currentNode) {
            this.head = currentNode.next;
        } else {
            let prevNode = null;
            let currentIndex = 0;

            while (currentIndex < index && currentNode) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            if (prevNode && currentNode) {
                prevNode.next = currentNode.next;
            }
        }
        this.size--;
    }

    removeFromHead() {
        if(!this.head) return null;
        let head = this.head;
        if (head.next) {
            this.head = head.next;
        } else {
            this.head = null;
        }
        this.size--;
    }

    removeFromTail(){
        if (!this.size) return null;

        let current = this.head;
        let prev = null;
        let currentIndex = 0;

        while (currentIndex < this.size && current) {
            prev = current;
            current = current.next;
            currentIndex++;
        }

        if (prev && current) {
            prev.next = current.next;
        }

        this.size--;
    }

    prepend(element: T): void {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(element: T) {
        const node = new Node(element);
        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    print() {
        let curr = this.head;
        let res = '';
        while (curr) {
            res += `${curr.value} `;
            curr = curr.next;
        }
        console.log(res);
    }
}

const list = new LinkedList<number>();
list.append(1);
list.append(2);
console.log(list)
