import {ISortable} from './ISortable'

export class NumberGroup implements ISortable {
    data: number [];

    constructor() {
        
    }

    get length(): number {};
    swap(leftPos: number, right: number): void {

    }
    compare(leftPos: number, rightPos: number): boolean {

    }
}