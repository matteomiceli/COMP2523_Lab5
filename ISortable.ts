class Node {
    next: Node | null = null;
    data: number;
    constructor(data: number) {
        this.data = data;
    }
}

export interface ISortable {
    length: number
    compare(leftPos: number, rightPos: number): boolean
    swap(leftPos: number, rightPos: number): void
}