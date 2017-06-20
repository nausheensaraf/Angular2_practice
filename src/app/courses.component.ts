import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({
    selector:'courses',
    template:`
            <h2>Courses</h2>
            {{ title | uppercase }}
            <input type="text" autoGrow />

            <ul>
                <li *ngFor="let course of courses, let i = index">
                    {{ i + 1 }} - {{ course }}
                </li>
            </ul>
            `,
    providers: [CourseService], /* here we specify the depencies for this component */
})
export class CoursesComponent{
     title: string ="The title of courses page";
    
     courses;
       
     constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
     }
}