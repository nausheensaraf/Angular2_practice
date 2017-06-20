import {Component} from '@angular/core'

@Component({
    selector:'pipes',
    template:`
            {{ testPipe.title | uppercase }}
            <br/>
            {{ testPipe.students | number }}
            <br/>
            {{ testPipe.rating | number: '2.2-3'}}
            <br/>
            {{ testPipe.price | currency : 'INR' : true}}
            <br/>
            {{ testPipe.releaseDate | date : 'MMM yyyy' }}
            <br/>
            {{ testPipe | json}}
            `,
})
export class PipesComponent{
    
    testPipe = {
        title: "Angular for Beginners",
        rating: 4.9754,
        students: 5987,
        price: 99.95,
        releaseDate: new Date(2017, 5, 22)
    }
}