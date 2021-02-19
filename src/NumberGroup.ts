import { ISortable } from './ISortable'

export class NumberGroup implements ISortable {
    data: number[];

    constructor(array) {
        this.data = array;
    }

    get length(): number {
        return this.data.length;
    };
    swap(leftPos: number, rightPos: number): void {
        let tmp = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = tmp;
    }
    compare(leftPos: number, rightPos: number): boolean {
        return this.data[leftPos] > this.data[rightPos]
    }
}

let test = new NumberGroup([8, 4]);

test.compare(8, 4);
test.swap(2, 1);