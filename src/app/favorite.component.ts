import {Component, Input, Output, EventEmitter} from '@angular/core'


@Component
({
    selector: 'favorite',
    // template:`
    //     <i 
    //         class ="fa"
    //         [class.fa-star-o]="!isFavorite"
    //         [class.fa-star]= "isFavorite"
    //         (click)="onClick()">
    //     </i>     
    //     `             replace this with templateUrl

    templateUrl:'./favorite.template.html',
    styles:[`
        .fa-star
        {
            color: orange;
        }
    `]
})

export class FavoriteComponent
{ canSave =true;
   // isFavorite = false; ------>this is private and not visible to the consumer of this component, we need to declare it as an input property
   
   @Input() isFavorite = false; //now this private property becomes an input property
   
   @Output() change = new EventEmitter();

   onClick()
    {
        this.isFavorite =!this.isFavorite;
       
       this.change.emit({ newValue: this.isFavorite });
    }

    btnClk()
    {
        console.log("cansave : "+this.canSave);
    }
}