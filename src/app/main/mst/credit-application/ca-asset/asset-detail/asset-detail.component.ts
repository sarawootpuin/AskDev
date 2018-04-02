import { Component, OnInit } from '@angular/core';
import {creditApplicationService} from "../../credit-application.service";
import {caBgDetailSub} from "../../model/ca-bgdetailsub";
import {caListMaster} from "../../model/ca_listmaster";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {TextMaskType} from "../../../../../shared/config/text-mask-type";

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html'
})
export class AssetDetailComponent implements OnInit {

  bgdetailSub : caBgDetailSub =  new caBgDetailSub() ;
  listFAT : caListMaster[] = [];
  listFAC : caListMaster[] = [];
  listFAS : caListMaster[] = [];
  listEQP : caListMaster[] = [];
  listBDY : caListMaster[] = [];
  listENG_TYPE : caListMaster[] = [];

  OutURL : string ;
  constructor(private creditApplicationService: creditApplicationService,
              private serviceEndPoint: ServiceEndpoint,
              private textmask : TextMaskType,
              private userStorage: UserStorage) {
    this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
      + "/ask/salecall/GetINTRO?device=web&user=" + this.userStorage.getUserName()
      + "&Comcode=" + this.userStorage.getComCode()+ "&INTRO_MTHD_CD=20&condition";
  }

  ngOnInit() {

    this.creditApplicationService.eventBgdetailSub.subscribe(
      (detailSub : caBgDetailSub) => {
         this.bgdetailSub = detailSub ;
      }
    );

    //--------- list ans
    this.creditApplicationService.eventListMaster.subscribe(
      (value) => {
        this.listFAT = this.creditApplicationService.listFAT ;
        this.listFAC = this.creditApplicationService.listFAC ;
        this.listFAS = this.creditApplicationService.listFAS ;
        this.listEQP = this.creditApplicationService.listEQP ;
        this.listBDY = this.creditApplicationService.listBDY ;
        this.listENG_TYPE = this.creditApplicationService.listENG_TYPE ;

        if (this.listFAC) (this.onChangeFat('OnInit'));
        if (this.listFAS) (this.onChangeFac('OnInit'));
      }
    );
  }

  onChangeFat(mode : string){
    if (mode != 'OnInit'){
      let assetSelect = (this.listFAT.find((item) => {return item.id_code === this.bgdetailSub.asst_type }));
      this.bgdetailSub.asset_type = assetSelect.remark ;
      this.bgdetailSub.asst_code = '' ;
      this.bgdetailSub.asst_sub_code = '' ;
    }
    if (this.creditApplicationService.listFAC){
      let filterFac :  caListMaster[] = [] ;
      filterFac = this.creditApplicationService.listFAC.filter( listObj => listObj.key1 == this.bgdetailSub.asst_type );
      this.listFAC = filterFac ;
    }
  }

  onChangeFac(mode : string){
    if (mode != 'OnInit'){ this.bgdetailSub.asst_sub_code = '' ; }
    if (this.creditApplicationService.listFAS){
      let filterFas :  caListMaster[] = [] ;
      filterFas = this.creditApplicationService.listFAS.filter( listObj =>(( listObj.key1 == this.bgdetailSub.asst_type )
                                                                            && (listObj.key2 == this.bgdetailSub.asst_code) ));
      this.listFAS = filterFas ;
    }
  }

  setDealerName(value : string){
     console.log(value);
  }

  setDealerCode(value : string){
      this.bgdetailSub.dealer_code = value ;
  }
}
