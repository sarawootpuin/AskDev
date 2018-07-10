import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caBuyer} from "../../../model/ca-buyer";
import {caBuyerDoc} from "../../../model/ca-buyerdoc";
import {creditApplicationService} from "../../../credit-application.service";
import {getHostElement} from "@angular/core/src/render3";

@Component({
  selector: 'app-ca-buyer-doc',
  templateUrl: './ca-buyer-doc.component.html',
})
export class CaBuyerDocComponent implements OnInit, OnDestroy {
  @Input() isReadonly : boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  selectBuyer   :caBuyer ;
  listBuyerDoc :  caBuyerDoc[];
  listBuyerDocTmp :  caBuyerDoc[];
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
          this.listBuyerDocTmp = JSON.parse(JSON.stringify(this.listBuyerDoc));
          //console.log('11111111',this.listBuyerDocTmp);
          this.onFilter('Factored');
          if ((this.listBuyerDoc) && (this.listBuyerDoc.length > 0 ) ){
            this.selectBuyerDoc = this.listBuyerDoc[0];
            // this.selectBuyerDoc = JSON.parse(JSON.stringify(this.listBuyerDoc[0]));
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
            this.listBuyerDocTmp = JSON.parse(JSON.stringify(this.listBuyerDoc));
            //console.log(this.listBuyerDocTmp);
            this.onFilter('Factored');
            if ((this.listBuyerDoc) && (this.listBuyerDoc.length > 0 ) ){
              this.selectBuyerDoc = this.listBuyerDoc[0];
              // this.selectBuyerDoc = JSON.parse(JSON.stringify(this.listBuyerDoc[0]));
            }
        }
        //this.listBuyerDoc = this.listBuyerDoc.filter((element)=>{
        //  return element.factored_doc_type == this.filterType
        //})

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
     else if (typechk == "select_p") {this.selectBuyerDoc.factored_doc_type = "P"}
     else if (typechk == "select_c") {this.selectBuyerDoc.factored_doc_type = "C"}
     if (data == "N") { this.selectBuyerDoc.factored_doc_type = ""}

     for(let j=0; j < this.listBuyerDoc.length; j++) {
       for(let k=0; k < this.listBuyerDocTmp.length; k++) {
         if (this.listBuyerDoc[j].doc_code == this.listBuyerDocTmp[k].doc_code) {
           this.listBuyerDocTmp[k] = this.listBuyerDoc[j];
         }

       }
     }

     this.selectBuyer.listcabuyerdoc = this.listBuyerDocTmp;
     //console.log('after',this.listBuyerDoc);
     //console.log('after',this.listBuyerDocTmp);

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

  onFilter(pType) {
    if (pType !== 'ALL' ) {
      this.listBuyerDoc = JSON.parse(JSON.stringify(this.listBuyerDocTmp.filter(
        (data: any) => data.forfilter == pType
      )));
    } else {
      this.listBuyerDoc = JSON.parse(JSON.stringify(this.listBuyerDocTmp));
    }

    //console.log('222222',this.selectBuyer.listcabuyerdoc);
  }

  onClickCheckbox(value, selrow){
    let data ;
    if (value.target.checked)
      {
        data = 'Y';
      }
    else
      {
        data= 'N';
      }

    this.selectBuyerDoc = selrow;
    this.selectBuyerDoc.factored_ifany  = data;
    //console.log(this.listBuyerDoc);

    for(let j=0; j < this.listBuyerDoc.length; j++) {
      for(let k=0; k < this.listBuyerDocTmp.length; k++) {
        if (this.listBuyerDoc[j].doc_code == this.listBuyerDocTmp[k].doc_code) {
          this.listBuyerDocTmp[k] = this.listBuyerDoc[j];
        }

      }
    }

    this.selectBuyer.listcabuyerdoc = this.listBuyerDocTmp;
   // console.log(this.listBuyerDocTmp);
    return data;
  }
}
