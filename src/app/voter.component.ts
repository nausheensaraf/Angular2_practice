import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component
({
    selector: 'voter',
    template : `
    <div class = "wrapper">

        <i 
            class="fa fa-chevron-up vote-button" 
            [class.highlighted]="myVote == 1"
            (click)="upVote()">
        </i>

        <span class = "vote-count">{{ voteCount + myVote }}</span>
        
        <i 
            class="fa fa-chevron-down vote-button"
            [class.highlighted]="myVote == -1"
            (click)="downVote()">
        </i>
    </div>
    `,
    styles:[`
        .wrapper
        {
            width : 20px;
            text-align: center;
            font-size:30px;
            color : #999;
        }

        .vote-button
        {
            cursor: pointer;
        }

        .highlighted
        {
            color: orange;
        }
    `]
})

export class VoterComponent
{
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();  //used for raising the vote event

    upVote()
    {
       if(this.myVote ==1) // preventing tthe user from doing double up-votes
       {
           return;
       }

       this.myVote++; // otherwise increase the user's votes

       this.vote.emit({ myVote : this.myVote }); // publish the event....in the event data, we are sending the user's vote
    }

    downVote()
    {
        if(this.myVote == -1)
        {
            return;
        }

        this.myVote--;

        this.vote.emit({ myVote :this.myVote });
    }
}