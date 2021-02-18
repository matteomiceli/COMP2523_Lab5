import {ISortable} from './ISortable'

export class NumberGroup implements ISortable {
    data: number [];

    constructor(array) {
        this.data = array;
    }

    get length(): number {
        return this.data.length;
    };
    swap(leftPos: number, right: number): void {

    }
    compare(leftPos: number, rightPos: number): boolean {

    }
}

