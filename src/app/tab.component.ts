import {Component} from '@angular/core'

@Component({
    selector:'tabs',
    template:`
        <ul class = "nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click) = "viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click) = "viewMode = 'list'">List View</a></li>
        </ul>
        <div>{{viewMode}}</div>
        <div [ngSwitch]="viewMode">
            <template *ngSwitchCase="'map'" ngSwitchDefault>Map View Content</template>
            <template *ngSwitchCase="'list'">List View Content</template>
        </div>
    `
 


})
export class TabsComponent{
     viewMode = 'map';
}