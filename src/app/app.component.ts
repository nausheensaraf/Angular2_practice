import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { MessageComponent } from './message.component';
import { FavoriteComponent } from './favorite.component';
import { Subscription } from "rxjs/Subscription";


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  // <change-password-form></change-password-form>

    selector:'app-root',
    template:`
      


    <routes-test></routes-test>
<br/><br/><br/>

    <albums></albums>
    <br/><br/><br/>
    <album></album>

    <br/><br/><br/>

    <github-profile></github-profile>

    <br/><br/><br/>

    <server-connection></server-connection>

    <br/><br/><br/>

    <test-observables></test-observables>    

    <br/><br/><br/>
   
    
    
    <br/><br/><br/>

    <signup-form></signup-form>

    <br/><br/><br/>

    <subscription-form></subscription-form>

    <br/><br/><br/>

     <tweets></tweets>
      <tweet></tweet>

      <br/><br/><br/>

      <contact-form></contact-form>

      <br/><br/><br/>

      <bs-panel>
        <div class = "heading">
          This the heading!
        </div>
        <div class = "body">
          This is the body!
        </div>
        <div class = "body">
          This is another body!
        </div>
      </bs-panel>

      <br/><br/><br/>

      <h2>My First Angular 2 App</h2>
      <br/><br/><br/>
    
      <zippy title="Who can see my stuff?">
            Content of who can see my stuff
        </zippy>
        <zippy title="Who can contact me?">
            Content of who can contact me
        </zippy>

      <br/><br/><br/>

      <customPipes></customPipes>
      <br/><br/>

      <div *ngIf = "testCourses.length > 0">
        List of courses
      </div>
      <div *ngIf = "testCourses.length == 0">
        You don't have any courses yet.
      </div>

      <div [hidden] = "testCourses.length == 0">
        List of courses
      </div>
      <div [hidden] = "testCourses.length > 0">
        You don't have any courses yet.
      </div>

      <voter></voter>

      <courses></courses>

      <br/>
      <pipes></pipes>
      <br/>
      <br/>

      <like></like>

      

      <tabs></tabs>

      <i class="fa fa-star"></i> 
      <favorite [isFavorite]="post.isFavorite" (change)= "onFavoriteChange($event)"></favorite>

      <authors></authors>
      

      <input type = "text" [value]="title" (input) ="title = $event.target.value" />
 
      <input type ="text" [(ngModel)] = "title"/> 


      <input type = "button" (click) ="title =''" value="Clear" />
      Preview:{{title}}

      <button 
        class ="btn btn-primary"
        [style.backgroundColor]="isActive ? 'cyan' : 'gray'">
        Submit
      </button>

      <div (click)="onDivClick()"> 
        <button (click)="onClick($event)">Submit</button>
      </div>
      `
      //  <div (click)="onDivClick"> // here we are subscribing to the click event 

      //<like [totalLikes]="tweet.totalLikes" [iLike] ="tweet.iLike"></like>  -----> NOT WORKING

})
export class AppComponent 
// implements OnInit 
{
  title = 'app works!';
  isActive = true;
  
  onDivClick() //handler for the div
  {
    console.log("Handled by div");
  }
  onClick($event) //handler for the button
  {
    $event.stopPropagation(); //to stop event bubbling
    console.log("Clicked", $event);
  }

  post = {
    title:"Title",
    isFavorite:true
  }

  onFavoriteChange($event)
  {
    console.log($event);
  }

  testCourses = [];
}
