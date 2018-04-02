import {Component, OnInit} from '@angular/core';
import {UserStorage} from "../../../shared/user/user.storage.service";
import {BlacklistNcbService} from "../blacklist-ncb-service";
import {ModelCardType} from "./model/modelCardType";
import {ModelPurpose} from "./model/modelPurpose";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blacklist-ncb-search',
  templateUrl: './blacklist-ncb-search.component.html'
})
export class BlacklistNcbSearchComponent implements OnInit {

  constructor(private userStorage: UserStorage,
              private blacklistNcbService: BlacklistNcbService,
              private dataPipe: DatePipe,
              private router:Router
  ) {
  }

  modelCardType_1: ModelCardType[] = [];
  modelCardType_2: ModelCardType[] = [];
  modelCardType_3: ModelCardType[] = [];
  modelCardType_4: ModelCardType[] = [];
  modelPurpose: ModelPurpose[] = [];
  refCode: string = "";
  firstName: string = "";
  middleName: string = "";
  familyName: string = "";
  cardNo: string = "";
  dateOfBirth: string = "";
  idCountry: string = "";
  edtFinAmt: string = "";
  idType: string = "";
  CardType_1: string = "";
  CardType_2: string = "";
  CardType_3: string = "";
  CardType_4: string = "";
  edtPurpose: string = "";
  selectPurpose: string = "";
  trackID:string="";


  ngOnInit() {
    this.blacklistNcbService.getCardType().subscribe(
      (data: any) => {
        this.modelCardType_1 = ModelCardType.parse(data.LIST_DATA);
        this.modelCardType_2 = ModelCardType.parse(data.LIST_DATA);
        this.modelCardType_3 = ModelCardType.parse(data.LIST_DATA);
        this.modelCardType_4 = ModelCardType.parse(data.LIST_DATA);
      }
    );

    this.blacklistNcbService.getPurpose().subscribe(
      (data: any) => {
        this.modelPurpose = ModelPurpose.parse(data.LIST_DATA);
        //console.log(this.modelPurpose);
      }
    );

  }

  onClickSearch() {
    this.idType = '';
    this.selectPurpose = '';
    if (this.modelCardType_1.find(i => i.NAME_TH == this.CardType_1)) {
      if (this.modelCardType_1.find(i => i.NAME_TH == this.CardType_1).ID_CODE != '00') {
        this.idType = this.modelCardType_1.find(i => i.NAME_TH == this.CardType_1).ID_CODE
      }
    }

    if (this.modelCardType_2.find(i => i.NAME_TH == this.CardType_2)) {
      if (this.modelCardType_2.find(i => i.NAME_TH == this.CardType_2).ID_CODE != '00') {
        if (this.idType != '') {
          this.idType = this.idType + ',';
        }
        this.idType = this.idType + this.modelCardType_2.find(i => i.NAME_TH == this.CardType_2).ID_CODE
      }
    }

    if (this.modelCardType_3.find(i => i.NAME_TH == this.CardType_3)) {
      if (this.modelCardType_3.find(i => i.NAME_TH == this.CardType_3).ID_CODE != '00') {
        if (this.idType != '') {
          this.idType = this.idType + ',';
        }
        this.idType = this.idType + this.modelCardType_3.find(i => i.NAME_TH == this.CardType_3).ID_CODE
      }

    }

    if (this.modelCardType_4.find(i => i.NAME_TH == this.CardType_4)) {
      if (this.modelCardType_4.find(i => i.NAME_TH == this.CardType_4).ID_CODE != '00') {
        if (this.idType != '') {
          this.idType = this.idType + ',';
        }
        this.idType = this.idType + this.modelCardType_4.find(i => i.NAME_TH == this.CardType_4).ID_CODE
      }
    }

    if (this.modelPurpose.find(i => i.NAME_TH == this.edtPurpose)) {
      this.selectPurpose = this.modelPurpose.find(i => i.NAME_TH == this.edtPurpose).ID_CODE;
    }

   // console.log(this.edtPurpose);
    let obj = {
      "memberref": this.refCode,
      "enqpurpose": this.selectPurpose?this.selectPurpose:this.modelPurpose[0].ID_CODE,
      "enqamount": this.edtFinAmt,
      "familyname": this.familyName,
      "firstname": this.firstName,
      "middlename": this.middleName,
      "dateofbirth": this.dataPipe.transform(this.dateOfBirth, 'dd/MM/yyyy'),
      "id_type": this.idType,
      "id_number": this.cardNo,
      "id_issuecountry": this.idCountry,
      "userlogin": this.userStorage.getUserName(),
      "urlncb": "http://27.254.21.113:8080/AskNCB_Webservice15/services/NCB_webService/cpuTocpuEnquiryTest"
    }

    let listObj:any[];
    this.blacklistNcbService.getNcbSearch(obj).subscribe(
      (data:any)=>
      {
        listObj = data.LIST_DATA;
        if(data.LIST_DATA[0])
        {
          this.trackID = data.LIST_DATA[0].tracking_id;
          this.blacklistNcbService.setTracking_id(this.trackID);
          this.router.navigate(['blacklist/ncb-subjectresult']);
          //console.log(this.trackID);
        }
        else
        {
          this.trackID = data.LIST_DATA[0].tracking_id;
         // console.log(this.trackID);
        }

      }
    );

  }

}
