import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {TaskItem} from "./task-item";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-task-item',
  templateUrl: './todo-task-item.component.html',
  styleUrls: ['./todo-task-item.component.css']
})
export class TodoTaskItemComponent implements OnInit, OnChanges, OnDestroy {
  subscription: Subscription;
  subscriptionTask: Subscription;
  subscriptionComCode: Subscription;
  @Input("groupCode") groupCode: string;
  @Output("onTaskSelect") taskSelect: EventEmitter<TaskItem> = new EventEmitter();
  listTask: TaskItem[] = [];
  listTaskFull: TaskItem[] = [];
  showAll: boolean = false;
  comCode: string;
  isLoading: boolean = false;
  task: TaskItem;

  constructor(private todoService: TodoService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.task = this.todoService.task;
    console.log('task:'+this.task);
    this.subscriptionTask = this.todoService.taskSelected.subscribe(
      (task) => {
        this.task = task;
      }
    );
    this.subscriptionComCode = this.todoService.comCodeSelected.subscribe(
      (comCode) => {
        this.fetchItem();
      }
    )
  }

  ngOnChanges() {
    this.fetchItem();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionTask != null) {
      this.subscriptionTask.unsubscribe();
    }
    if (this.subscriptionComCode != null) {
      this.subscriptionComCode.unsubscribe();
    }
  }

  fetchItem() {
    //let userCode = this.userStorage.getSuborCode(); //this.userStorage.getCode();
    this.comCode = this.todoService.comCode;
    let userCode : string
    let url = location.hash
    if(url.search('home')> 0){
      userCode = this.userStorage.getCode()
    }else{
      userCode = this.userStorage.getSuborCode()
    }
    this.listTaskFull = [];
    this.listTask = [];
    this.isLoading = true;
    this.subscription = this.todoService.getTaskTodo("web", userCode,
      this.comCode, this.groupCode).subscribe(
      (data: any) => {

        for (let i = 0; i < data.LIST_TASK_TODO.length; i++) {
          let obj = data.LIST_TASK_TODO[i];
          let taskItem: TaskItem = new TaskItem(obj.TASK_CODE,
            obj.TASK_NAME, obj.COUNT_TODO);
          this.listTaskFull.push(taskItem);
        }
        this.filterTask();
        this.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  filterTask() {
    if (!this.showAll) {
      this.listTask = this.listTaskFull.filter((task) => {
        if (+task.taskCount > 0) {
          return true
        } else {
          return false;
        }
      });

    } else {
      this.listTask = this.listTaskFull;
    }
  }

  onSelectTask(task: TaskItem) {
    this.taskSelect.emit(task);
  }

  toggleMode(state: any) {
    this.showAll = state;
    this.filterTask();
  }
}
