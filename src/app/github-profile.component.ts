import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GithubService } from './github.service';

@Component
({
    selector: 'github-profile',
    styles: [
        `
            .avatar
            {
                width:100px;
                height:100px;
                border-radius: 100%;
            }
        `
    ],
    templateUrl: './github-profile.component.html'  
})

export class GithubProfileComponent implements OnInit
{
    isLoading = true;
    username = "laxmikant4644";
    user = {};
    followers = [];

    constructor(private _githubService : GithubService){
    }

    ngOnInit()
    {
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.username)
        )
        .subscribe(
            res => {
                this.user = res[0]; //user initialized from the first element of this array
                this.followers = res[1];
            },
            null, //not supplied an error handler here because it wouldn't add any value and would just pollute the code with noise
            () => { this.isLoading = false; } //handler for the completion of the observable
        )
    }
}