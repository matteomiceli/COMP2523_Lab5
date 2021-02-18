import {ISortable} from './ISortable'

export class CharacterGroup implements ISortable {
    data: string;

    constructor(string) {
        this.data = string;
    }

    get length(): number {
        return this.data.length;
    };
    swap(leftPos: number, right: number): void
    compare(leftPos: number, rightPos: number): boolean
}