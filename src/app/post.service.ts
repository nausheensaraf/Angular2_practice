import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class PostService {
    /*
        url to our API end-point
        we declare this field as private 
        so that the clients of this service,
        in this case components will not be able to acccess or modify this field.
     */
    private _url = "https://jsonplaceholder.typicode.com/posts";

    /*
    2..
        this would create a private field in our class
        and initialize with this http argument here
    */
    constructor(private _http: Http) {
    }

    /* 
    1..
        returns all posts from our API end-point.
        To call our API end-point, we need to  
        use the http service of angular...
        ..we import it and also include it in index.html as external script
        now we inject this http class into the constructor of our PostService 

    3..
        get() returns an Observable of response i.e. Observable<Response>
        so we are going to return this Observable from our service
        and our component will be the consumer of this service.
        So, it will subscribe to it, and when an ajax call is completed,
        the response is placed into the observable 
        and then pushed into our component

    4..
        we should not expose this response object outside the service class
        because the whole point of creating this class is to encapsulate all the http communication.
        So, instead we should only expose the ACTUAL DATA reuturned from the server.
        To do this, we use the MAP OPERATOR to transform this response object to something else (here into a json object)

    5..
        changing the return type to Observable of Post[] (Post array)

     */
    getPosts(): Promise<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json())
            .toPromise();
    }

    /*
        the second parameter of the post() method 
        is a string that represents the REQUEST BODY
        so, we need to serialize this post object as a string
    */
    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}




