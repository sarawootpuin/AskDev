import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caBuyer} from "../../../model/ca-buyer";
import {caBuyerDoc} from "../../../model/ca-buyerdoc";
import {creditApplicationService} from "../../../credit-application.service";

@Component({
  selector: 'app-ca-buyer-doc',
  templateUrl: './ca-buyer-doc.component.html',
})
export class CaBuyerDocComponent implements OnInit, OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;

  selectBuyer   :caBuyer ;
  listBuyerDoc :  caBuyerDoc[] ;
  selectBuyerDoc : caBuyerDoc;

  filterType : string = '' ;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {

    this.selectBuyerDoc = new caBuyerDoc();
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

  onClickCheck(value , test : any){
    let data ;
     if (value.target.checked ){
       data = 'Y';
       if (test){
         test.select_o = 'N';
         test.select_p = 'N';
         test.select_c = 'N';
       }
     }else {
       data= 'N';
     }
     //console.log(data);
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

}
