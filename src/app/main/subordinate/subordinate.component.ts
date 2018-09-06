

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
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-subordinate',
  templateUrl: './subordinate.component.html',
  styleUrls: ['./subordinate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubordinateComponent implements OnInit , OnChanges , OnDestroy {
  getOrdinate : TreeNode[];
  setAllData : TreeNode[];
  setActiveData  : TreeNode[];
  selectedNode: TreeNode;
  CompleteMethodData : TreeNode[];

  subscription : Subscription;
  subscriptionAccessCompany : Subscription;
  reload :boolean = false;
  isLoading: boolean = false;
  filterBy : string = 'Y';
  generalData : any;

  showAllData  : ListDaTa = new ListDaTa('','','','','','',[])
  ActiveData  : ListDaTa = new ListDaTa('','','','','','',[])

  todoName : any;

  nameText : string = ''

  warningText : string = ''
  filteredCountriesSingle : any[];

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
            this.generalData = data
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.subscription){
      this.subscription.unsubscribe()
    }
    if(this.subscriptionAccessCompany){
      this.subscriptionAccessCompany.unsubscribe()
    }
  }

  disabled(){
    this.isLoading = false
    this.disableddialog.setAction('WARNING');
    this.disableddialog.setMessage('This user disabled');
    this.disableddialog.open();
  }

  backToHome(){
    this.router.navigate(['/home']);
    this.userStorage.storageSuborCode(this.userStorage.getCode());
    this.userStorage.storageSuborUserName(this.userStorage.getUserName());
    this.userStorage.storageSuborAccessCompany(this.userStorage.getAccessCompany());
    this.userStorage.storageIsSubor('N');
  }

  click(event){
    if(typeof event == 'string'){
      console.log(this.CompleteMethodData)
      this.selectedNode = this.searchTree(this.CompleteMethodData[0],event)
      this.searchTree(this.CompleteMethodData[0],this.selectedNode.data.layerCode)
      this.onNodeSelect(this.selectedNode)
      console.log('node name',this.selectedNode)
    }else{
      console.log(typeof event)
      this.onNodeSelect(event.node)
    }
    console.log('>>>>>> select list',this.selectedNode)

  }

  onNodeSelect(event){
    this.reload = false;
    this.todoName = event.label
    this.userStorage.storageIsSubor('Y');
    this.userStorage.storageSuborCode(event.data.code)
    this.userStorage.storageSuborUserName(event.data.userName)
    this.subscriptionAccessCompany = this.subordinateService.getAccessCompany('web',this.userStorage.getSuborCode(),this.userStorage.getSuborUserName())
    .subscribe((value : any) => {
      //console.log(value)
      try {
        if (value.MSG_NAME == 'Complete') {
          this.userStorage.storageSuborAccessCompany(JSON.stringify(value.ACCESS_COMPANY))
          setTimeout(() => {
            this.reload = true;
          }, 500);
          this.isLoading = false
        }
      } catch (error) {
        //console.log(error)
      }
    },(error : any) => {
      //console.log(error);
    },() => {
      //console.log('After complete')
    })
  }

  setList(data : any){
    let subOrdinate = data.LIST_DATA
    //For loop for create data set
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
    this.getOrdinate = this.setActiveData[0].children
    this.CompleteMethodData = this.setActiveData
    this.isLoading = false

    console.log(JSON.parse(JSON.stringify(this.setAllData)))
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
      data : {"code" : data.userCode,"userName" : data.userName, "active" : data.active, "layerCode" : data.layerCode },
      leaf : false
    };
  }

  filter(event){
        // console.log(event)
    if(event == 'Y'){
      this.nameText = ''
      this.getOrdinate = this.setActiveData[0].children
      this.CompleteMethodData = this.setActiveData
    }else{
      this.nameText = ''
      this.getOrdinate = this.setAllData[0].children
      this.CompleteMethodData = this.setAllData
    }
  }

  search(event) {
    this.warningText = "";
    this.filteredCountriesSingle = []
    let result = this.getCompleteMethod(this.getOrdinate,event)
    result.sort((n1,n2) => {
      if (n1 > n2 ) {
        return 1;
      }
      if (n1 < n2) {
        return -1;
      }
      return 0;
    })
    console.log(result)
    this.filteredCountriesSingle = result
    result.length == 0 ? this.warningText = "* Not Found!,Please try again." : this.warningText = ""
  }

  // search(event) {
  //   this.warningText = "";
  //   this.filteredCountriesSingle = [];
  //   let findMKT = this.generalData.LIST_DATA;
  //   console.log(findMKT,event)
  //
  //   if(findMKT.EMP_NAME_E.toLowerCase().indexOf(event.query.toLowerCase())==0 || findMKT.CODE.toLowerCase().indexOf(event.query.toLowerCase())==0) {
  //     this.filteredCountriesSingle.push(findMKT.EMP_NAME_E);
  //   }
  //   this.filteredCountriesSingle.length == 0 ? this.warningText = "* Not Found!,Please try again." : this.warningText = ""
  // }

  getCompleteMethod(element, matchingTitle){
    for(let i = 0 ; i < element.length ; i++){
      if( element[i].label.toLowerCase().indexOf(matchingTitle.query.toLowerCase())==0 ||
          element[i].data.code.indexOf(matchingTitle.query)==0){
        this.filteredCountriesSingle.push(element[i].label)
        if (element[i].children != null){
          var j;
          var result = null;
          for(j=0; result == null && j < element[i].children.length; j++){
            result = this.getCompleteMethod(element[i].children, matchingTitle)
          }
        }
      }else if (element[i].children != null){
        var j;
        var result = null;
        for(j=0; result == null && j < element[i].children.length; j++){
          result = this.getCompleteMethod(element[i].children, matchingTitle)
        }
      }
    }
    return this.filteredCountriesSingle
  }

searchTree(element, matchingTitle){
    // console.log(element,matchingTitle.substring(matchingTitle.length - 2, 0))
    if(element.label == matchingTitle || element.data.layerCode == matchingTitle.substring(matchingTitle.length - 2, 0)){
      element.expanded = true
      return element;
    }else if (element.children != null){
      var i;
      var result = null;
      for(i=0; result == null && i < element.children.length; i++){
        result = this.searchTree(element.children[i], matchingTitle);
      }
      return result;
    }
    return null;
  }


}
