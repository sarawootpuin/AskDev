import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ContactService} from "./contactperson.service";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ContactPersonModel} from "./model/ContactPerson-model";
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-contactperson',
  templateUrl: './contactperson.component.html',
  providers : [ContactService]
})
export class ContactpersonComponent implements OnInit  {

  okContact : ContactPersonModel ;
  @ViewChild('dialogcontactperson') dialogcontactperson: ActionDialogComponent;
  @Output("onContactSelect") onSelect: EventEmitter<ContactPersonModel> = new EventEmitter();

  closeTab2 : boolean = true ;
  openTabNo : number = 0 ;

  btnchoose : boolean  = false;

  constructor(private conTactService : ContactService,private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.conTactService.clickTab.subscribe(
      ( tabNo : number ) =>{
         console.log(tabNo);
         this.openTabNo = tabNo ;
         if (tabNo == 0){
           this.closeTab2 = true ;
         } else if (tabNo == 1){
           this.closeTab2 = false ;
         }
      }
    );

    this.conTactService.btnChoose.subscribe(
      (value : boolean) =>{
         this.btnchoose = value;
      }
    );
  }

  chooseContact(){
    console.log(this.openTabNo);
    if (this.openTabNo == 0) {
      this.conTactService.getContactPerson('web',this.userStorage.getUserName(),'edit').forEach(
       (json : any) => {
         console.log(json);
         if (json.CODE == '200'){
           this.okContact = ContactPersonModel.parse(json.DATA);
           this.onSelect.emit(this.okContact);
         }

         this.closeDialog();
         ///// Reset
         this.openTabNo = 0 ;
         this.closeTab2 = true;

       }
      );
    }else if (this.openTabNo == 1){
      this.onSelect.emit(this.conTactService.thisContact);
      this.closeDialog();
    }
   // console.log('after data');
  }

  showDialog() {
    this.dialogcontactperson.open() ;
    this.conTactService.sendsignalShowDialog();
    //this.okContact = null;
  }

  closeDialog() {
    ///// Reset
   this.openTabNo = 0 ;
   this.closeTab2 = true;
   this.dialogcontactperson.close();
  }

  setFNMT(list : any[]){
     this.conTactService.setListFNMT(list);
  }

  setFNME(list : any[]){
    this.conTactService.setListFNME(list);
  }

  changeTab(value : number){
    this.conTactService.sendClickTab(value);
  }
}
