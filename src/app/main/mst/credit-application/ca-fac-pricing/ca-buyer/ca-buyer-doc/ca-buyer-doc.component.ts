import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caBuyer} from "../../../model/ca-buyer";
import {caBuyerDoc} from "../../../model/ca-buyerdoc";
import {creditApplicationService} from "../../../credit-application.service";

@Component({
  selector: 'app-ca-buyer-doc',
  templateUrl: './ca-buyer-doc.component.html',
})
export class CaBuyerDocComponent implements OnInit, OnDestroy {
  @Input() isReadonly : boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  selectBuyer   :caBuyer ;
  listBuyerDoc :  caBuyerDoc[] ;
  selectBuyerDoc : caBuyerDoc;

  filterType : string = 'Factored' ;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {

    this.selectBuyerDoc = new caBuyerDoc();
    if(this.creditApplicationService.getCaHead()) {
      if(this.creditApplicationService.getCaHead().listcabuyer.length > 0){
        this.selectBuyer = this.creditApplicationService.getCaHead().listcabuyer[0]
        if (this.selectBuyer)
        {
          this.listBuyerDoc = this.selectBuyer.listcabuyerdoc ;
          if ((this.listBuyerDoc) && (this.listBuyerDoc.length > 0 ) ){
            this.selectBuyerDoc = this.listBuyerDoc[0];
          }
        }
      }
    }
    this.subscripData = this.creditApplicationService.eventcabuyer.subscribe(
      (value : caBuyer ) =>
      {
        this.selectBuyer = value ;
        if (this.selectBuyer)
        {
            this.listBuyerDoc = this.selectBuyer.listcabuyerdoc ;
            if ((this.listBuyerDoc) && (this.listBuyerDoc.length > 0 ) ){
              this.selectBuyerDoc = this.listBuyerDoc[0];
            }
        }
      }
    );


  }

  onClickCheck(value , test: any ,typechk, selrow){
    let data ;
     if (value.target.checked ){
       data = 'Y';

       if (test){
         //console.log('In test')
         test.select_o = 'N';
         test.select_p = 'N';
         test.select_c = 'N';
       }
     }else {
       data= 'N';
     }


    this.selectBuyerDoc = selrow;

     if (typechk == "select_o") {this.selectBuyerDoc.factored_doc_type  = "O"}
     else if (typechk == "select_p") {  this.selectBuyerDoc.factored_doc_type = "P"}
     else if (typechk == "select_c") { this.selectBuyerDoc.factored_doc_type = "C"}
     if (data == "N") { this.selectBuyerDoc.factored_doc_type = ""}
    //console.log(this.selectBuyerDoc)
     return data;
  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  colorOfTable(rowData, rowIndex) {
    // console.info('in tableOneHighlight - Table is NOT scrollable; You WILL see this log', rowIndex)
    // if(rowIndex>=1){
    //   return '';
    // }
     return 'background-color: red';
  }

  loopOth1(value : string) {
    for(let buyerDoc of this.listBuyerDoc) {
      buyerDoc.oth1 = value;
    }
  }

  loopOth2(value : string) {
    for(let buyerDoc of this.listBuyerDoc) {
      buyerDoc.oth2 = value;
    }
  }

  loopOth3(value : string) {
    for(let buyerDoc of this.listBuyerDoc) {
      buyerDoc.oth3 = value;
    }
  }

}
