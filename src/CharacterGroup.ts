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
        let tmp = leftPos;
        leftPos = rightPos;
        rightPos = tmp;
    }
    compare(leftPos: number, rightPos: number): boolean {
        if (leftPos > rightPos) {
            console.log(false);
            return false;
        } else {
            return true;
        }
    }
}

// let test = new CharacterGroup(['b', 'a']);

// test.compare('b', 'a');
// test.swap();
