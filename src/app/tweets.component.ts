import {Component} from '@angular/core'
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor="let tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    providers: [TweetService]
})
export class TweetsComponent {
    tweets: any[];
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
} 