import { Compenent, OnChanges } from '@angular/core';

@Compenent({
    selector: 'ai-star',
    templateURL: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})



export class StarComponent {
    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * (86 / 5);
    }

}