import { ISortable } from "./ISortable";

export class SortUtil {
    collection: ISortable;

    constructor(collection: ISortable) {
        this.collection = collection;
    }

    sort(): void {
    const { length } = this.collection;
    let isSorted = false;
    let lastUnsorted = length - 1;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < lastUnsorted; i++) {
        // HANDLE LINKED LIST LOGIC HERE
        if (this.collection instanceof LinkedList) {
          throw new Error("This function needs to be implemented");
        }

        // use swap method and compare
        if (this.collection instanceof Array) {
          if (this.collection[i] > this.collection[i + 1]) {
            let tempLeft = this.collection[i];
            this.collection[i] = this.collection[i+1];
            this.collection[i+1] = tempLeft;
            isSorted = false;
          }
      }
      lastUnsorted--;
    }
  }
}


