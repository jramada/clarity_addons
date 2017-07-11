import { Comparator } from "clarity-angular";

export class PropertyComparator implements Comparator<any> {

    property: string;

    constructor(property: string) {
        this.property = property;
    }

    compare(a: any, b: any) {
        if (a[this.property] == null || a[this.property] === undefined) return 1;
        if (b[this.property] == null || b[this.property] === undefined) return -1;
        if (typeof a[this.property] === 'string' || a[this.property] instanceof String)
            return a[this.property].localeCompare(b[this.property]);
        else a[this.property] - b[this.property];

    }
    
}