import {FormControl} from '@angular/forms'

//this class will include all validation rules for the username field
export class UsernameValidators
{
    /*this method takes a FormControl object 
    and returns null if valid and an object if invalid*/
    static cannotContainSpace(oFormControl : FormControl)
    {
        //if indexOf( space ) is >= 0  then this means that we have a space here
        //and at this time, the validation should fail
        if(oFormControl.value.indexOf(' ') >= 0)
        {
            return { cannotContainSpace : true };
        }
        return null;
    }

    static shouldBeUnique(oFormControl: FormControl)
    {
        // to make this function a async validator,... return a promise
        //promise object represents the result of an asynchronous operation
        return new Promise((resolve, reject) => {
            //call the server to valiate the username
            setTimeout(function(){
                if(oFormControl.value == "nausheen")
                {
                    //using resolve funtion to return the value to the caller
                    resolve({ shouldBeUnique: true });
                }
                else
                {
                    resolve(null);
                }
            },1000);
        });
    }

}