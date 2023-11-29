import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  public user: any;


  public listSchedule:any
  constructor(private _scheduleService: ScheduleService) {}

  ngOnInit(): void {
    const tmp = localStorage.getItem('user');
    this.user = JSON.parse(tmp!);
    this.getSchedule();
  }
  getSchedule() {
    this._scheduleService.getSchedule(this.user.id).subscribe((res) => {
      this.listSchedule=res
    });
  }
}
