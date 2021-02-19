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
        let array = this.data.split('');
        
        let tmp = array[leftPos];
        array[leftPos] = array[rightPos];
        array[rightPos] = tmp;
        
        let newString = array.join('');
        this.data = newString;
    }

    compare(leftPos: number, rightPos: number): boolean {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }
}

// let test = new CharacterGroup(['b', 'a']);

// test.compare('b', 'a');
// test.swap();
