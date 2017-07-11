import { Component, OnInit, Input } from '@angular/core';
import { OptionsFilter } from './options-filter';
import { ContainsFilter } from './contains_filter';
import { PropertyComparator } from './property_comparator';

@Component({
    moduleId: module.id,
    selector: 'example',
    templateUrl: 'example.html',
    style: '',
})

export class ExampleComponent implements OnInit {

    users = [{name:'Ichigo', admin_access: 1},{name:'Goku', admin_access: 0}];
    selected: any;
    pagination = [];

    //filters
    nameFilter = new ContainsFilter('name');
    
    accessFilter = new OptionsFilter();
    accessFilterOptions: any[] = [{ label: "Yes", value: 1 }, { label: "No", value: 0 }];
    accessFilterProperty: string = "admin_access";

    //comparators
    nameComparator = new PropertyComparator('name');
   
    ngOnInit(): void {
       
    } 
 
}
