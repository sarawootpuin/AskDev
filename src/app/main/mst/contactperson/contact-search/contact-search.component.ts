import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contactperson.service";
import {ContactSearchModel} from "../model/ContactPerson-search";
import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ContactPersonModel} from "../model/ContactPerson-model";

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html'
})
export class ContactSearchComponent implements OnInit {

  subscriptionList: Subscription;


  contacrList : ContactSearchModel[] ;
  selectContact : ContactSearchModel ;

  modelContact : ContactPersonModel ;


  search_input: string = '';
  constructor(private conTactService : ContactService,
              private userStorage: UserStorage) { }

  ngOnInit() {
  }

  searchContact(){
    this.subscriptionList = this.conTactService.searchContact('web'
                                                              ,this.userStorage.getUserName()
                                                              ,this.userStorage.getComCodePort()
                                                              ,this.search_input )
     .subscribe(
       (json : any) =>
       {
          //console.log(json);
          this.contacrList = ContactSearchModel.parse(json.LIST_DATA) ;
       }
    )
  }

  onRowSelect( select :ContactSearchModel){
     this.conTactService.setContactSelect(select);
  }

  openTab2(action : string){
    this.conTactService.sendClickTab(1);
    this.conTactService.getContactPerson('web',this.userStorage.getUserName(),action).subscribe(
      (json : any) =>{
        if (json.DATA) {
        this.modelContact = ContactPersonModel.parse(json.DATA) ;
        } else {
          this.modelContact = new ContactPersonModel();
        }
        this.conTactService.sendeditContact(this.modelContact);
      }
    )  ;


  }

}
