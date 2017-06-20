import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent {
    // form = new FormGroup({
    //     username: new FormControl('', Validators.required), //required a static method defined in class, Validators
    //     password: new FormControl('', Validators.required)
    //     /*FormGroup({}) takes objects as arguments
    //     each key in this object represents the name of the FormControl() in that group
    //     here, "username" and "password" are keys*/
    // });
    //we can use FormBuilder class instead of the above


    //form property is a FormGroup
    form: FormGroup;  

    //fb is a parameter of type FormBuilder
    constructor(fb: FormBuilder) 
    {
        this.form = fb.group({
            /* 
            here we pass an array, where each element in this array represents one of the arguments of the FormControl class            
            first value is the DEFAULT VALUE and the second value is the VALIDATOR FUNCTION 
            both are optional, we need not specify them
            
            ans finally we store the result of the group()method into our form property like:-
            "this.form = fb.group({...})" */
            username: ['', Validators.compose([
                                    Validators.required, 
                                    UsernameValidators.cannotContainSpace
                                    ]), UsernameValidators.shouldBeUnique],

            password: ['',Validators.required]
        });
        /*to create a FormGroup object, 
        we pass an object here, which represents our FormGroup*/
    }

    signup()
    {
        //validation errors once the user submits the form
        this.form.controls['username'].setErrors({
            //setErrors method takes an object...
            //this object includes a key which specifies the name of the validation error
            invalidLogin: true
        });

        console.log(this.form.value);
        // this.form.value will return a json object that includes all values in the form
    }
}