import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService
{
    private _baseUrl = "https://api.github.com/users/";

    constructor(private _http : Http){
    }

    /*
        takes a username and returns a user object
    */
    getUser(username)
    {
        return this._http.get(this._baseUrl + username)
            .map(res => res.json());
    }

     /*
        takes a username and returns the list of followers
    */
    getFollowers(username)
    {
        return this._http.get(this._baseUrl + username + "/followers")
            .map(res => res.json());
    }
}