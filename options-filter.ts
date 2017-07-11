import { Component, EventEmitter, Input } from "@angular/core";
import { Filter } from "clarity-angular";

@Component({
    moduleId: module.id,
    selector: "options-filter",
    templateUrl: "options-filter.html",
    styleUrls: ["options-filter.css"]
})
export class OptionsFilter implements Filter<any> {

    @Input()
    options: any[];

    @Input()
    property: string;

    selectedOptions: { [option: string]: boolean } = {};

    nbOptions = 0;

    changes: EventEmitter<any> = new EventEmitter<any>(false);

    toggleBox(i) {
        let option = this.options[i].value;
        this.selectedOptions[option] = !this.selectedOptions[option];
        this.selectedOptions[option] ? this.nbOptions++ : this.nbOptions--;
        this.changes.emit(true);
    }

    accepts(object: any) {
        return this.nbOptions === 0 || this.selectedOptions[object[this.property]];
    }

    isActive(): boolean {
        return this.nbOptions > 0;
    }

}