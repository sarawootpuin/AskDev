import {
  Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {UserStorage} from "../../../shared/user/user.storage.service";
import {AccessCompany} from "../../../shared/user/access-company";
import {TodoService} from "./todo.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit, OnDestroy , OnChanges {
  subscription: Subscription;
  comCode: string;
  accessCompany: AccessCompany[] = [];
  @ViewChild('content_list') appTodoList: ElementRef;

  constructor(private todoService: TodoService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    console.log('test')
    this.comCode = this.userStorage.getComCode();
    this.todoService.comCode = this.comCode;
    this.todoService.comCodeSelected.emit(this.comCode);
    console.log(this.userStorage.getSuborAccessCompany())
    //let accJson = JSON.parse(this.userStorage.getAccessCompany());
    let accJson = JSON.parse(this.userStorage.getSuborAccessCompany());
    for (let i = 0; i < accJson.length; i++) {
      let acc: AccessCompany = new AccessCompany(accJson[i].COM_CODE);
      this.accessCompany.push(acc);
    }

    this.todoService.taskSelected.subscribe(
      (task) => {
        window.scrollTo(0, this.appTodoList.nativeElement.offsetTop);
      }
    );
  }

  ngOnChanges(  ) {
    console.log('OnChange---------------->');
  }


  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setComCode(newComCode: string) {
    this.userStorage.storageComCode(newComCode);
    this.comCode = newComCode;
    this.todoService.comCode = this.comCode;
    this.todoService.comCodeSelected.emit(this.comCode);
    this.todoService.task = null;
    this.todoService.taskSelected.emit();
  }
}
