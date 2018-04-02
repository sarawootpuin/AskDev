import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {TaskItem} from "./todo-task/todo-task-item/task-item";

@Injectable()
export class TodoService {
  task: TaskItem;
  comCode: string = '';
  taskSelected: EventEmitter<TaskItem> = new EventEmitter();
  comCodeSelected: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient,
              private service: ServiceEndpoint) {
  }

  getGroupTodo(device: string, userCode: string) {
    const url = this.service.url + this.service.common_tps + `/ask/common/getGroupTodo?device=${device}&userCode=${userCode}`;
    console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options).timeout(10000);
  }

  getTaskTodo(device: string, userCode: string, comCode: string, groupTodo: string) {
    const url = this.service.url + this.service.common_tps + `/ask/common/getTaskTodo?device=${device}&userCode=${userCode}&comCode=${comCode}&groupTodo=${groupTodo}`;
    console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options).timeout(10000);
  }

  getListSaleCall(device: string, userName: string, taskCode: string, code: string) {
    const url = decodeURI(this.service.url + this.service.sale_call_api + `/ask/salecall/GetSaleCallTodoList?Task=${taskCode}&CODE=${code}&device=${device}&user=${userName}`);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  getListAppForm(device: string, userCode: string, comCode: string, taskCode: string) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/TodoAppform?device=${device}&userCode=${userCode}&comCode=${comCode}&taskCode=${taskCode}`
    console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  getScoringTodo(device: string, userName: string, comCode: string, stgId: number) {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringGetToDo?device=${device}&user=${userName}&comcode=${comCode}&stgid=${stgId}`
    console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  getScoringTodoAssginTaskPost(device: string, userName: string, todo: string, id: number) {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringTodoAssginTaskPost`;
    let data = {
      "device": device,
      "userName": userName,
      "todo": todo,
      "id": id
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  todoCA(device: string, userCode: string, comCode: string, task: string) {
    const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=${device}&user=${userCode}&comcode=${comCode}&task=${task}`
    console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  submitScoringTodoAssginTask(device: string, userName: string, listAssignTask: any) {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SubmitAssignTaskPost`;
    let data = {
      "device": device,
      "userName": userName,
      "listAssignTask": listAssignTask
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }
}
