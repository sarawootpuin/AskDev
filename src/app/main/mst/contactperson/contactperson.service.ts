import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {EventEmitter, Injectable} from "@angular/core";
import {ContactSearchModel} from "./model/ContactPerson-search";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ContactPersonModel} from "./model/ContactPerson-model";
/**
 * Created by pongsatorn.an on 27/12/2560.
 */

@Injectable()
export class ContactService {

  constructor(private http: HttpClient, private service: ServiceEndpoint,
              private userStorage: UserStorage) {
    //console.log('Create Contact Service');
  }

  searchContact(device: string, userCode: string, comCode: string, vCondition: string) {
    //  http://localhost:8080/
    const url = this.service.url + this.service.sale_call_api + `/ask/contactPerson/SearchContact?device=${device}&user=${userCode}
    &comcode=${comCode}&condition=${vCondition}`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //console.log(url);
    return this.http.get(url, options);
  }

  // getContactPerson(device: string, userCode: string, comCode: string, conPer: string, conEnt: string) {
  getContactPerson(device: string, userCode: string , action : string) {
    let url = '';
    if (action == 'edit' ) {
    url = this.service.url + this.service.sale_call_api + '/ask/contactPerson/GetContactPerson?device=' + device
      + '&user=' + userCode
      + '&comcode=' + this.contactSelect.com_code
      + '&conpercode=' + this.contactSelect.cont_person_code
      + '&conentcode=' + this.contactSelect.cont_ent_code + '';
    }else {
    url = this.service.url + this.service.sale_call_api + '/ask/contactPerson/GetContactPerson?device=' + device
      + '&user=' + userCode
      + '&comcode=' + this.userStorage.getComCodePort();
    }
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    //console.log(url);
    return this.http.get(url, options);

  }


  saveContactPerson(value : ContactPersonModel){

    let contactForSave = value ;

    contactForSave.com_code = this.userStorage.getComCode();
    contactForSave.usr_upd = this.userStorage.getCode();
    contactForSave.username = this.userStorage.getUserName();
    //console.log(contactForSave);

    const url = this.service.url + this.service.sale_call_api + `/ask/contactPerson/postsavecontact`;
   // const url = `http://localhost:8080/WebServices_Salecall/ask/contactPerson/postsavecontact`;


    let data = contactForSave ;
    //console.log(url);
    //console.log(data);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.post(url, data, options);

  }


  contactSelect : ContactSearchModel ;
  //eventSelect = new EventEmitter<ContactSearchModel>();
  setContactSelect(select : ContactSearchModel){
     this.contactSelect = select ;
     this.setbtnShoose(true);
  }

  ListFNMT : any[];
  setListFNMT(list : any[]){
   this.ListFNMT = list ;
  }

  ListFNME : any[];
  setListFNME(list : any[]){
    this.ListFNME = list ;
  }

  ////-----------------------  Event (Emit & subscribtion) ------------------
  signalShowDialog = new EventEmitter<number>();
  sendsignalShowDialog() {
    this.signalShowDialog.emit(1);
  }

  clickTab = new EventEmitter<number>();
  sendClickTab(tabNo : number) {
    this.clickTab.emit(tabNo);
  }

  thisContact = new ContactPersonModel();
  editContact = new EventEmitter<ContactPersonModel>();
  sendeditContact(value : ContactPersonModel){
    this.thisContact = value ;
    this.editContact.emit(value);
  }


  btnChoose = new EventEmitter<boolean>();
  setbtnShoose(value :boolean ){
     this.btnChoose.emit(value);
  }
  ////-----------------------End  Event (Emit & subscribtion) ------------------

}
