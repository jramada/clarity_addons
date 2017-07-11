import { StringFilter } from "clarity-angular";

export class ContainsFilter implements StringFilter<any> {

    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    accepts(object: any, search: string): boolean {
        if (object[this.key] == null || object[this.key] === undefined) return false;
        return "" + object[this.key] == search
            || object[this.key].toLowerCase().indexOf(search) >= 0;
    }

}