import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TodoService} from "../todo.service";
import {Subscription} from "rxjs/Subscription";
import {TaskItem} from "../todo-task/todo-task-item/task-item";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  task: TaskItem;
  pageType: number;
  saleCallPage: number = 1;
  appFormPage: number = 2;
  verifiyNormalPage: number = 3;
  verifiyGroupPage: number = 4;
  caBgplPage: number = 5;
  saleCallArray: string[] = ["SM-01", "SM-02", "SM-03", "SM-04", "SM-05"
    , "SM-06", "SM-07", "SM-08", "SM-09", "SM-10", "SM-11", "SM-12"
    , "SM-13", "SM-14", "SM-15", "SM-16", "SM-SM-1111"];
  appFormArray: string[] = ["AP-01", "AP-01-1", "AP-02", "AP-03", "AP-03-1"
    , "AP-03-2", "AP-03-3"];
  verifyArray: string[] = ["STG1"];
  verifyGroupArray: string[] = ["STG2", "STG3", "STG4", "STG5"];
  caBgplArray: string[] = ["CA-01", "CA-01-1","CA-01-2","CA-01-3","CA-01-4"
    , "CA-02", "CA-03","CA-04-1", "CA-04-2", "CA-04-3"
    , "CA-05","CA-05-1", "CA-06", "CA-07"];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.task = this.todoService.task;

    this.subscription = this.todoService.taskSelected.subscribe(
      (task) => {
        this.task = task;
        this.setRouting();
      }
    );

    this.setRouting();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setRouting() {
    console.log(this.task);
    if (this.task !== undefined && this.task !== null) {
      if (this.saleCallArray.lastIndexOf(this.task.taskCode) > -1) {
        this.pageType = this.saleCallPage;
      } else if (this.appFormArray.lastIndexOf(this.task.taskCode) > -1) {
        this.pageType = this.appFormPage;
      } else if (this.verifyArray.lastIndexOf(this.task.taskCode) > -1) {
        this.pageType = this.verifiyNormalPage;
      } else if (this.verifyGroupArray.lastIndexOf(this.task.taskCode) > -1) {
        this.pageType = this.verifiyGroupPage;
      } else if (this.caBgplArray.lastIndexOf(this.task.taskCode) > -1) {
        this.pageType = this.caBgplPage;
      } else {
        this.pageType = 0;
      }
    }
  }
}
