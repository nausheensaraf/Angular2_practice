import {Component} from '@angular/core';

@Component({
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}