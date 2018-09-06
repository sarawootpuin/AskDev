import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {GroupItem} from "./group-item";
import {TodoService} from "../todo.service";
import {TaskItem} from "./todo-task-item/task-item";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  comCode: string = '';
  isLoading: boolean = false;
  listGroup: GroupItem[] = [];

  fasTaskArray: string[] = ["D11", "D12","D21","D22","D21-2","D21-3","D3","D41",
                            "CO08","CO09"];

  constructor(private todoService: TodoService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    // this.todoService.comCode = this.comCode;
    // console.log(this.todoService.comCode);
    this.subscription = this.todoService.comCodeSelected.subscribe(
      (comCode) => {
        this.comCode = comCode;
        this.getGroupTodo();
      }
    );
    this.getGroupTodo();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  getGroupTodo() {
    let userCode : string
    let url = location.hash
    if(url.search('home')> 0){
      userCode = this.userStorage.getCode()
    }else{
      userCode = this.userStorage.getSuborCode()
    }
    this.listGroup = [];
    this.isLoading = true;
    this.subscription = this.todoService.getGroupTodo("web", userCode).subscribe(
        (data: any) => {
          //console.log(data);
          for (let i = 0; i < data.GROUP_TODO.length; i++) {
            let obj = data.GROUP_TODO[i];
            let groupItem: GroupItem = new GroupItem(obj.GROUP_TODO,
              obj.NUM_TODO);
            this.listGroup.push(groupItem);
          }
          this.isLoading = false;
        },
        (error: any) => {
          //console.log(error);
          this.isLoading = false;
        }
      );
  }

  getHaveDirectUrl(task: TaskItem): string {
    if (task !== undefined && task !== null) {
      if (this.fasTaskArray.lastIndexOf(task.taskCode) > -1) {
          if ((task.taskCode.substr(0,2) == 'D1') || (task.taskCode.substr(0,2) == 'D2') || (task.taskCode == 'D3') ) {
            return 'http://localhost:4200/#/disburse?comcode=' + this.todoService.comCode + '&taskcode=' + task.taskCode + '&taskname=' + task.taskName;
          }
          else {
            return '';
          }
      }
      else
      {
        //console.log(task.taskCode);
        return '';
      }
    }
  }

  onTaskSelect(task: TaskItem) {
    let directURL = this.getHaveDirectUrl(task);
    if (directURL != '') {
      window.open(directURL, "_self");
    }
    else {
      this.todoService.task = task;
      this.todoService.taskSelected.emit(task);
    }
  }
}
