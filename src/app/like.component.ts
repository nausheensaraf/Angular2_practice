import { Component, Input } from '@angular/core';

@Component
({
    selector: 'like',
    template:`
        <i 
            class="fa fa-heart"
            [class.highlighted]="iLike"
            (click)="onClick()">
        </i>
        <span>{{ totalLikes }}</span>
    `,

    //[class.highlighted]="iLike" ----> CLASS BINDING is used to optionally render highlighted class if the user likes the given tweet
    //highlighted class has been bound to the property of the class 'iLike'

    // (click)="onClick()"---->  this is the handler for the click event

    // <span>{{ totalLikes }}</span> ---->  here we display the total number of likes using interpolation

    styles:[`
        .fa-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted
        {
            color:deeppink;
        }
    `]
})

export class LikesComponent
{
    @Input() totalLikes = 0;
   @Input() iLike = false;

   onClick()
   {
       this.iLike = !this.iLike; //toggle the iLike property
       this.totalLikes += this.iLike ? 1 : -1;
   }
}