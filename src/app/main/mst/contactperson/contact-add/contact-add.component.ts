import { Component, OnInit } from '@angular/core';
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ContactService} from "../contactperson.service";
import {ContactPersonModel} from "../model/ContactPerson-model";

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html'
})
export class ContactAddComponent implements OnInit {

  conTact : ContactPersonModel ;
  ListFNMT : any[];
  ListFNME : any[];
  constructor(private conTactService : ContactService,
              private userStorage: UserStorage) {
     //console.log('Create Contact Add');
  }

  ngOnInit() {
     this.conTact = new ContactPersonModel();

     this.conTactService.signalShowDialog.subscribe(
       (data) =>{
         this.ListFNMT = this.conTactService.ListFNMT;
         this.ListFNME = this.conTactService.ListFNME;
       }
     );

     this.conTactService.editContact.subscribe(
       ( data :ContactPersonModel) =>{
           this.conTact = data;
       }
     );
  }

  mapIntial(inputT : string){
    if(inputT == 'T'){
      let tempObj = this.ListFNMT.find(ObjTemp => ObjTemp.id == this.conTact.title_th) ;
      if (tempObj){
        this.conTact.title_en = tempObj.key1 ;
      }
    }
    else if (inputT == 'E')
    {
      let tempObj = this.ListFNME.find(ObjTemp => ObjTemp.id == this.conTact.title_en) ;
      if (tempObj){
        this.conTact.title_th = tempObj.key1 ;
      }
    }
  }

  onCancel(){
    this.conTactService.sendClickTab(0);
  }

  onSave(){
     if (this.conTact.name_th){
        //console.log(this.conTact);
        this.conTactService.saveContactPerson(this.conTact).subscribe(
          (value : any) => {
             // console.log('----  Result ------');
             // console.log(value);

             if (value.DATA){
               this.conTact = ContactPersonModel.parse(value.DATA) ;
               this.conTactService.sendeditContact(this.conTact);
               this.conTactService.btnChoose.emit(true);
             }
          }
        );
     }
  }

}
