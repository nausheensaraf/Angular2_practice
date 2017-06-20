import { Component } from '@angular/core';

@Component({
    selector:'customPipes',
    template:`
            {{ post.title }}
            <br/>
            {{ post.body  | summary:10 }}
            `
        
})
export class CustomPipeComponent{
     post = {
         title: "This is the title",
         body: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
         `
     }
}