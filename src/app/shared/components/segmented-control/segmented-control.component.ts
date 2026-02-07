import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-segmented-control',
    templateUrl: './segmented-control.component.html',
    styleUrls: ['./segmented-control.component.css']
})
export class SegmentedControlComponent {
    @Input() options: string[] = [];
    @Input() selected: string = '';
    @Output() selectionChange = new EventEmitter<string>();

    selectOption(option: string): void {
        if (this.selected !== option) {
            this.selected = option;
            this.selectionChange.emit(option);
        }
    }
}
