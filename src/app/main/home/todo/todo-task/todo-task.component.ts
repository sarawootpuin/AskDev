import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {GroupItem} from "./group-item";
import {TodoService} from "../todo.service";
import {TaskItem} from "./todo-task-item/task-item";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  comCode: string = '';
  isLoading:boolean = false;
  listGroup: GroupItem[] = [];

  constructor(private todoService:TodoService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    // this.todoService.comCode = this.comCode;
    // console.log(this.todoService.comCode);
    this.subscription = this.todoService.comCodeSelected.subscribe(
      (comCode)=> {
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

  getGroupTodo(){
    let userCode = this.userStorage.getCode();
    this.listGroup = [];
    this.isLoading = true;
    this.subscription = this.todoService.getGroupTodo("web", userCode)
      .subscribe(
      (data: any) => {
        console.log(data);
        for (let i = 0; i < data.GROUP_TODO.length; i++) {
          let obj = data.GROUP_TODO[i];
          let groupItem: GroupItem = new GroupItem(obj.GROUP_TODO,
            obj.NUM_TODO);
          this.listGroup.push(groupItem);
        }
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  onTaskSelect(task: TaskItem) {
    this.todoService.task = task;
    this.todoService.taskSelected.emit(task);
  }
}
