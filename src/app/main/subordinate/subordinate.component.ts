

import {Component, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TreeNode} from "primeng/api";
import {SubordinateService} from "./subordinate.service";
import {UserStorage} from "../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {ListOrd} from "./model/listOrd";
import {ListDaTa} from "./model/listDt";
import {isUndefined} from "util";
import {Router} from "@angular/router";
import {AlertDialogComponent} from "../../shared/center/alert-dialog/alert-dialog.component";
import {element} from "protractor";
import {el} from "@angular/platform-browser/testing/src/browser_util";


@Component({
  selector: 'app-subordinate',
  templateUrl: './subordinate.component.html',
  styleUrls: ['./subordinate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubordinateComponent implements OnInit , OnChanges {
  getOrdinate : TreeNode[];
  setAllData : TreeNode[];
  setActiveData  : TreeNode[];
  selectedNode: TreeNode;

  subscription : Subscription;
  reload :boolean = false;
  isLoading: boolean = false;
  filterBy : string = 'Y';

  showAllData  : ListDaTa = new ListDaTa('','','','','','',[])
  ActiveData  : ListDaTa = new ListDaTa('','','','','','',[])

  todoName : any;
  todoCode : any;

  @ViewChild('disableddialog') disableddialog: AlertDialogComponent;

  constructor(private subordinateService : SubordinateService,
              private userStorage : UserStorage,
              private  router : Router) { }

  ngOnInit() {
    this.subscription = this.subordinateService.getListSubordinate("web",this.userStorage.getUserName(),this.userStorage.getCode()).subscribe(
      (data : any) =>{
        // console.log(data)
        try{
          if(data.LIST_DATA.length > 1) {
            this.isLoading = true
            this.setList(data)
          }else{
            this.disabled()
            console.log('data', data, data.LIST_DATA.length)
          }
        } catch (e) {
          this.backToHome()
          console.log(e)
        }
        // console.log("Get service Link",data)
      });
  }

  ngOnChanges() {

  }

  disabled(){
    this.isLoading = false
    this.disableddialog.setAction('WARNING');
    this.disableddialog.setMessage('This user disabled');
    this.disableddialog.open();
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

  click(event){
    this.isLoading = true;
    this.onNodeSelect(event)
  }

  onNodeSelect(event){
    this.reload =false;
    this.todoName = event.node.label
    this.userStorage.storageSuborCode(event.node.data.code)
    this.userStorage.storageSuborUserName(event.node.data.userName)
    this.todoCode = event.node.data.code

    setTimeout(() => {
      this.reload =true;
    }, 500);
    this.isLoading = false
  }

  setList(data : any){
    let subOrdinate = data.LIST_DATA

    for(let i = 0 ; i < subOrdinate.length ; i++) {
      let count = subOrdinate[i].LAYER_CODE.length
      if (i == 0) {
        this.showAllData = new ListDaTa(subOrdinate[i].LAYER_CODE, subOrdinate[i].CODE, subOrdinate[i].USER_NAME, subOrdinate[i].EMP_NAME_E, subOrdinate[i].EMP_NAME_T, subOrdinate[i].ACTIVE)

      } else {
        let value = this.matching(this.showAllData,subOrdinate[i].LAYER_CODE.substring(count - 2, 0))
        if(value){
          value.child.push(new ListDaTa(subOrdinate[i].LAYER_CODE, subOrdinate[i].CODE, subOrdinate[i].USER_NAME, subOrdinate[i].EMP_NAME_E, subOrdinate[i].EMP_NAME_T, subOrdinate[i].ACTIVE))
        }
        this.sort(value)
      }
    }

    //For loop for set Active Data
    for(let i = 0 ; i < subOrdinate.length ; i++) {
      let count = subOrdinate[i].LAYER_CODE.length
      if (i == 0) {
        this.ActiveData = new ListDaTa(subOrdinate[i].LAYER_CODE, subOrdinate[i].CODE, subOrdinate[i].USER_NAME, subOrdinate[i].EMP_NAME_E, subOrdinate[i].EMP_NAME_T, subOrdinate[i].ACTIVE)
      } else {
        let value2 = this.matching(this.ActiveData,subOrdinate[i].LAYER_CODE.substring(count - 2, 0))
        if(value2){ // Return element found
          if ( this.matching(this.showAllData,subOrdinate[i].LAYER_CODE).child.length > 0 ||
               this.matching(this.showAllData,subOrdinate[i].LAYER_CODE).active == 'Y' ) {
            value2.child.push(new ListDaTa(subOrdinate[i].LAYER_CODE, subOrdinate[i].CODE, subOrdinate[i].USER_NAME, subOrdinate[i].EMP_NAME_E, subOrdinate[i].EMP_NAME_T, subOrdinate[i].ACTIVE))
          }
        }
        this.sort(value2)
      }
    }

    //exchange normal data to TreeNode[] for use <p-tree> , it just show TreeNode[]
    this.setAllData = [this.createNode(this.showAllData)]
    this.setActiveData = [this.createNode(this.ActiveData)]
    this.getOrdinate = this.setActiveData
    this.isLoading = false

    console.log(JSON.parse(JSON.stringify(this.ActiveData)))
    console.log(JSON.parse(JSON.stringify(this.getOrdinate)))
  }

  //function 'sort' : A-Z , sort data.
 sort(data){
    data.child.sort((n1,n2) => {
      if (n1.enName > n2.enName ) {
        return 1;
      }
      if (n1.enName < n2.enName) {
        return -1;
      }
      return 0;
    })
  }

  //Recursive factorial function
  matching(element, matchingTitle){
    let output = null
    if(element.layerCode == matchingTitle){
      output = element;
    }else if (element.child != null){
      var i;
      var result = null;
      for(i=0; result == null && i < element.child.length; i++){
        result = this.matching(element.child[i], matchingTitle);
      }
      output = result;
    }
    return output;
  }

  createNode(data : any): TreeNode{
    let childNode : TreeNode[] = []

    for(let c of data.child){
      childNode.push(this.createNode(c))
    }

    return {
      label : data.enName,
      expanded : data.userCode == this.userStorage.getCode() ? true : false,
      children : childNode,
      data : {"code" : data.userCode,"userName" : data.userName, "active" : data.active },
      leaf : false
    };
  }

  filter(event){
        // console.log(event)
    if(event == 'Y'){
      this.getOrdinate = this.setActiveData
    }else{
      this.getOrdinate = this.setAllData
    }
  }
}
