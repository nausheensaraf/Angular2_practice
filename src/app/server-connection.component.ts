import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';

import { PostService } from './post.service';

@Component
({
    selector: "server-connection",
    template: `
           <div *ngIf = "isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i>
            </div>
        `
})

export class ServerConnectionComponent implements OnInit
 {
    /*
        used to render loading icon dynamically
    */
    isLoading = true;

    /*
    1..
        injecting the PostService into our constructor

        when angular tries to instantiate this ServerConnectionComponent,
        it looks at the constructor of this component
        and sees that here we have a parameter of type "PostService"
        but it doesn't know where to find the PostService to create it.
        Even though PostService is a part of our project, 
        angular is not going to scan all files to discover all classes

    2..
        The injector does not know about the existence of  PostService
        so we need to register the PostService and any of its dependencies
        with this Injector
    */
    constructor(private _postService: PostService){    
    }

    /*
    3..
        this method will be called when angular instantiates our component..
        and is called after the constructor.
        If we need to CALL THE SERVER,
        we do it IN "ngOnInit()"
    */
    ngOnInit()
    {
        this._postService.getPosts()
        .then(posts => {
            this.isLoading = false;
            console.log(posts[0].body);
        }); 
    }
}