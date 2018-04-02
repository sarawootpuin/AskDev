import {EventEmitter, Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import 'rxjs';
//import {TaskTodo} from "./model/task-todo";
import {ServiceEndpoint} from "../../shared/config/service-endpoint";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HomeService {

  constructor(private http: HttpClient,private service: ServiceEndpoint) {
  }

}
