import { Component, OnChanges, Input, Output } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})



export class StarComponent {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * (86 / 5);
    }

    onClick() {
        this.notify.emit('clicked!');
    }

}