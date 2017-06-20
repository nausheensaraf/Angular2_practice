import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'summary' })   // here we pass an Object that has a NAME PROPERTY...and SUMMARY is the keyword used in our template

export class SummaryPipe implements PipeTransform
{
    transform(value: string, args: string[]) // this args parameter includes all arguments that we pass to our pipe
    {
        var limit = (args && args[0]) ? parseInt(args[0]) : 50; 

        if(value)
        {
            //return value.substring(0, 50) + "... ";
            return value.substring(0, limit) + "... ";
        }
    }
} 