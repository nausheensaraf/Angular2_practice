import { Component } from '@angular/core';

@Component
({
    selector: 'subscription-form',
    templateUrl:'./subscription-form.template.html',
     styleUrls: ['./styles.css']
})

export class SubscriptionFormComponent
{
    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(form){
        console.log(form.value);
    }
}
