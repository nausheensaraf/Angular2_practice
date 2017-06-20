import { Component } from '@angular/core';

@Component
({
    selector: 'contact-form',
    templateUrl:'./contact-form.template.html',
     styleUrls: ['./styles.css']
})

export class ContactFormComponent
{
    log(x)
    {
        console.log(x);
    }

    onSubmit(form)
    {
        console.log(form);
    }
}