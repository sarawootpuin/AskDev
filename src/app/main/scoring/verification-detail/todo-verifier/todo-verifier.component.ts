import {Component, OnDestroy, OnInit} from '@angular/core';
import {VerificationDetailService} from "../verification-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ToDoVerifierModel} from "../../model/todo-verifier.model";


@Component({
  selector: 'app-todo-verifier',
  templateUrl: './todo-verifier.component.html',
  styleUrls: ['./todo-verifier.component.css']
})
export class TodoVerifierComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todoVerifier: ToDoVerifierModel[];
  stgId :string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private verficationDetailService: VerificationDetailService) {
  }

  ngOnInit() {

    this.verficationDetailService.stgId = '1';
    this.stgId = this.verficationDetailService.stgId;
    this.subscription = this.verficationDetailService.getToDoVerifier().subscribe(
      (data: any) => {
        this.todoVerifier = ToDoVerifierModel.parse(data.LIST_DATA);
        console.log(this.todoVerifier);
      },
      (error: any) => {
        console.log(error);
      }
    );


  }

  setSelectedTodo(event) {
    this.verficationDetailService.checkReadOnly = false;
    this.router.navigate(['/scoring/verify-detail']
      , {
        relativeTo: this.route,
        queryParams: {
          run_no: event.data.run_no, com_code: event.data.com_code, ref_no: event.data.ref_no
          , ent_cd: event.data.ent_cd
        }
      });
  }
  chageStg(){
    console.log(this.stgId);
    this.verficationDetailService.stgId =this.stgId;
    console.log(this.verficationDetailService.stgId);
    this.subscription = this.verficationDetailService.getToDoVerifier().subscribe(
      (data: any) => {
        this.todoVerifier = ToDoVerifierModel.parse(data.LIST_DATA);
        console.log(this.todoVerifier);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }

  }

}
