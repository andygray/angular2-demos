import {Component, OnDestroy, Input} from "angular2/core";
import {SelectionItemComponent} from "../selection-item.component/selection-item.component";
import {Selection} from "../core/domain/Selection";
import {Competition} from "../core/domain/Competition";

@Component({
    selector: 'selections-list',
    templateUrl: 'app/selections-list.component/selections-list.component.html',
    styleUrls: ['app/selections-list.component/selections-list.component.css'],
    directives: [
        SelectionItemComponent
    ]
})
export class SelectionsListComponent implements OnDestroy {

    /** Public data */
    @Input() selections:Selection[];
    @Input() competition:Competition;

    ngOnDestroy() {

    }
}
