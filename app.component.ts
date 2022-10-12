import { Component, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import {
  ScheduleComponent, DragAndDropService,
  TimelineViewsService, ResizeService
} from '@syncfusion/ej2-angular-schedule';
import { roomData } from './data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TimelineViewsService, ResizeService, DragAndDropService]
})

export class AppComponent {


  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent;

  constructor() {
    
  }

  public isReadOnly(endDate: Date): boolean {
    return (endDate < new Date(2021, 6, 31, 0, 0));
  }

  

}
