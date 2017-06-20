import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component
({
    selector: "test-observables",
    template: `
            <input type = "text"
            id = "search"
            style = "width: 500px"
            placeholder = "search for artist">
        `
})

export class TestObservables
{
    constructor()
  {
    /*here we pass the reference to our input field ("#search")
    "keyup"" is the name of the event
    * "e.target.value" is the value of the text in the text box
    */
    // var jQ = jQuery.noConflict();
    var element = $("#search");
    var keyups = Observable.fromEvent(element, "keyup")
        .map((e: any) => e.target.value)
        .filter(text => text.length >=3)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(searchTerm => {
            var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
            var promise = $.getJSON(url);
            return Observable.fromPromise(promise);
        });

    //subscribe to it as an and when new data arrives
    /*with this implementation,
      everytime, we press a key in the text box,
      an event is fired placed into our observable stream
      and then pushed to us
      at this time, we log it on to the console
    */
    keyups.subscribe(data => console.log(data));
    console.log(new Observable());
   }
}