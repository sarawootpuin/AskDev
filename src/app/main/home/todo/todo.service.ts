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
    return this.http.get(url, options).timeout(30000);
    //return this.http.get(url, options);

  }

  getTaskTodo(device: string, userCode: string, comCode: string, groupTodo: string) {
    const url = this.service.url + this.service.common_tps + `/ask/common/getTaskTodo?device=${device}&userCode=${userCode}&comCode=${comCode}&groupTodo=${groupTodo}`;
    // console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options).timeout(30000);
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

  getListAppForm(device: string, userName: string ,userCode: string, comCode: string, taskCode: string) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/TodoAppform?device=${device}&userName=${userName}&userCode=${userCode}&comCode=${comCode}&taskCode=${taskCode}`
    //console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  getScoringTodo(device: string, userName: string, comCode: string, stgId: number) {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringGetToDo?device=${device}&user=${userName}&comcode=${comCode}&stgid=${stgId}`
    // console.log(url)
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

  // getListReg(device: string, userCode: string, comCode: string, taskCode: string,userName: string) {
  //   //const url = this.service.url + this.service.api_reg_todo + `/ask/regtodo/GetRegTodoList?device=${device}&userCode=${userCode}&comCode=${comCode}&taskCode=${taskCode}`
  //   const url = this.service.url + this.service.api_reg_todo + `/ask/regtodo/GetRegTodoList?Task=${taskCode}&CODE=${userCode}&device=${device}&user=${userName}&comcode=${comCode}`
  //   console.log(url)
  //   let options = {
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     }
  //   };
  //   return this.http.get(url, options);
  // }

  // getListIns(device: string, userCode: string, comCode: string, taskCode: string,userName: string) {
  //   //const url = this.service.url + this.service.api_ins_todo + `/ask/instodo/GetInsTodoList?device=${device}&userCode=${userCode}&comCode=${comCode}&taskCode=${taskCode}`
  //
  //   const url = this.service.url + this.service.api_ins_todo + `/ask/instodo/GetInsTodoList?Task=${taskCode}&CODE=${userCode}&device=${device}&user=${userName}&comcode=${comCode}`
  //   console.log(url)
  //   let options = {
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     }
  //   };
  //   return this.http.get(url, options);
  // }
  todoCA(device: string, userCode: string, comCode: string, task: string) {
    const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=${device}&user=${userCode}&comcode=${comCode}&task=${task}`
    // console.log(url)
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

  getListCosAdmin(device: string, userCode: string, comCode: string, taskCode: string) {
    const url = this.service.url + this.service.cos_tps + `/ask/CosTodo/CosTodoList?device=${device}&userCode=${userCode}&comCode=${comCode}&taskCode=${taskCode}`;
    // console.log(url);
    console.log('test by pong 123');
    let data = {
      "device" : device,
      "userName" : "-" ,
      "userCode" : userCode,
      "comCode" : comCode,
      "taskCode" : taskCode
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  getListCosAdminWht(device: string, userCode: string, comCode: string, taskCode: string) {
    const url = this.service.url + this.service.cos_tps + `/ask/CosTodo/CosTodoWht`;
    // console.log(url);
    console.log('test by pong 123');
    let data = {
      "device" : device,
      "userName" : "-",
      "userCode" : userCode,
      "comCode" : comCode,
      "taskCode" : taskCode
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  amendCa(device: string, userName: string, comCode: string, caNo: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/AmendInsertTempData';

    let data = {
      "device": device,
      "username": userName,
      "comcode": comCode,
      "cano": caNo
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //console.log(data);
    return this.http.post(url, data, options);
  }

}
