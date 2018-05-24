import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from "@angular/core";
import {creditApplicationService} from "../../credit-application.service";
import {caListMaster} from "../../model/ca_listmaster";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {TextMaskType} from "../../../../../shared/config/text-mask-type";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {caBgDetailSub} from "../../model/ca-bgdetailsub";
import {CaDetailappraisal} from "../../model/ca-bgDetailappraisal";


@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html'
})
export class AssetDetailComponent implements OnInit, OnChanges {


  listFAT: caListMaster[] = [];
  listFAC: caListMaster[] = [];
  listFAS: caListMaster[] = [];
  listEQP: caListMaster[] = [];
  listBDY: caListMaster[] = [];
  listENG_TYPE: caListMaster[] = [];
  listbgdetailappraisal : CaDetailappraisal[];

  detailappraisal: CaDetailappraisal = new CaDetailappraisal();
  bgdetailSub: caBgDetailSub = new caBgDetailSub();



  OutURL: string;

  @Input ('caDetailappraisal') caDetailappraisal = new CaDetailappraisal();
  @ViewChild ('addDialog') addDialog : ActionDialogComponent;
  @ViewChild ('deleteDialog') deleteDialog : AlertDialogComponent;



  constructor(private creditApplicationService: creditApplicationService,
              private serviceEndPoint: ServiceEndpoint,
              private textmask: TextMaskType,
              private userStorage: UserStorage) {
    this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
      + "/ask/salecall/GetINTRO?device=web&user=" + this.userStorage.getUserName()
      + "&Comcode=" + this.userStorage.getComCode() + "&INTRO_MTHD_CD=20&condition";
  }

  ngOnChanges(simpleChanges: SimpleChanges) {

  }

  ngOnInit() {

    this.creditApplicationService.eventBgdetailSub.subscribe(
      (detailSub: caBgDetailSub) => {

        this.bgdetailSub = detailSub;
        console.log(this.bgdetailSub);

        console.log(this.bgdetailSub.listbgdetailappraisal);
        if(!this.bgdetailSub.listbgdetailappraisal){
          console.log("it null");
          this.bgdetailSub.listbgdetailappraisal = [];
        }

        this.listbgdetailappraisal = this.bgdetailSub.listbgdetailappraisal;

        console.log(this.listbgdetailappraisal);
        this.onChangeFat('');
        this.onChangeFac('');
      }
    );

    //--------- list ans
    this.creditApplicationService.eventListMaster.subscribe(
      (value) => {
        this.listFAT = this.creditApplicationService.listFAT;
        this.listFAC = this.creditApplicationService.listFAC;
        this.listFAS = this.creditApplicationService.listFAS;
        this.listEQP = this.creditApplicationService.listEQP;
        this.listBDY = this.creditApplicationService.listBDY;
        this.listENG_TYPE = this.creditApplicationService.listENG_TYPE;
        console.log(this.listFAS)
        if (this.listFAC) (this.onChangeFat('OnInit'));
        if (this.listFAS) (this.onChangeFac('OnInit'));
      }
    );
  }

  onChangeFat(mode: string) {
    if (mode != 'OnInit') {
      let assetSelect = (this.listFAT.find((item) => {
        return item.id_code === this.bgdetailSub.asst_type
      }));
      /*this.bgdetailSub.asset_type = assetSelect.remark;
       this.bgdetailSub.asst_code = '';
       this.bgdetailSub.asst_sub_code = '';*/
    }
    if (this.creditApplicationService.listFAC) {
      let filterFac: caListMaster[] = [];
      filterFac = this.creditApplicationService.listFAC.filter(listObj => listObj.key1 == this.bgdetailSub.asst_type);
      this.listFAC = filterFac;
    }
  }

  onChangeFac(mode: string) {
    if (mode != 'OnInit') {
      //this.bgdetailSub.asst_sub_code = '';
    }
    if (this.creditApplicationService.listFAS) {
      let filterFas: caListMaster[] = [];
      filterFas = this.creditApplicationService.listFAS.filter(listObj => (( listObj.key1 == this.bgdetailSub.asst_type )
      && (listObj.key2 == this.bgdetailSub.asst_code) ));
      this.listFAS = filterFas;
    }
  }

  setDealerName(value: string) {
    console.log(value);
  }

  setDealerCode(value: string) {
    this.bgdetailSub.dealer_code = value;
  }

  openAddDialog(){
    this.detailappraisal = new CaDetailappraisal();
    // this.detailappraisal.ca_no = this.bgdetailSub.ca_no;
    this.detailappraisal.sub_id = this.bgdetailSub.sub_id;
    this.detailappraisal.sub_id2 = this.bgdetailSub.sub_id2;
    console.log(this.detailappraisal);
    this.addDialog.setTitle('Add Pricing');
    this.addDialog.open();


  }
  setDataDetailAppraisal(event){

    this.listbgdetailappraisal.push(this.detailappraisal);
    console.log(this.detailappraisal);
    this.bgdetailSub.listbgdetailappraisal = this.listbgdetailappraisal;

    this.creditApplicationService.setSelectBgdetailSub(this.bgdetailSub);
  }

  opendeleteDialog(){
    this.deleteDialog.open();
  }

  deleteSelection(){
    console.log(this.detailappraisal);
    console.log(this.listbgdetailappraisal.indexOf(this.detailappraisal));
    this.listbgdetailappraisal.splice(this.listbgdetailappraisal.indexOf(this.detailappraisal), 1);
  }

  onRowSelect(event){
    this.detailappraisal= event;
    console.log(event)
  }

}
