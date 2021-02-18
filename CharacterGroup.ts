import {ISortable} from './ISortable'

export class CharacterGroup implements ISortable {
    data: string;

    get length(): number {};
    swap(leftPos: number, right: number): void
    compare(leftPos: number, rightPos: number): boolean
}