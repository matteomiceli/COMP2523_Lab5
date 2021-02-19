import {ISortable} from './ISortable'

export class CharacterGroup implements ISortable {
    data: string;

    constructor(string) {
        this.data = string;
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

// let test = new CharacterGroup(['b', 'a']);

// test.compare('b', 'a');
// test.swap();
