import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EntityDialogComponent} from "../../entity/entity-dialog/entity-dialog.component";
import {EntityModel} from "../../entity/model/entity-model";
import {caGuarantor} from "../model/ca-guarantor";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";
import {DatePipe} from "@angular/common";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ca-guarantor-tab',
  templateUrl: './ca-guarantor-tab.component.html'
})
export class CaGuarantorTabComponent implements OnInit ,OnDestroy {
  @ViewChild("entity_dialog") entity_dialog: EntityDialogComponent;

  subscripData: Subscription;
  listcaGuarantor : caGuarantor[] = [];
  selectGuarantor : caGuarantor ;

  constructor(private creditApplicationService: creditApplicationService
             ,private dataPipe: DatePipe) { }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead:caHead ) =>
      {
        this.listcaGuarantor = caHead.listcaguarantor ;

        if ((this.listcaGuarantor) && (this.listcaGuarantor.length > 0)) {  this.onSelectGuarantor(this.listcaGuarantor[0]) ;  }
      }
    );
  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

  }

   ///////  add  &  select  Guarantor
  openEntity() {
    this.entity_dialog.showDialog();
  }
  getEntity(entityModel:EntityModel){
    if (!this.listcaGuarantor)
    { console.log('Empty');   this.listcaGuarantor = [] }

    let maxgua  = this.listcaGuarantor.length ;  //  0,1,2,3
    this.listcaGuarantor = [...this.listcaGuarantor, this.addGuarantor(entityModel,maxgua)];
    this.creditApplicationService.caHead.listcaguarantor =  this.listcaGuarantor;
    this.onSelectGuarantor(this.listcaGuarantor[maxgua]);
  }
  addGuarantor(entityModel:EntityModel , maxGua : number){
    console.log(entityModel);
    let newGuaran = new caGuarantor();

    maxGua = maxGua + 1 ;

    newGuaran.com_code = entityModel.comCode ;
    //newGuaran.ca_no    = this.creditApplicationService.caHead.ca_no ;
    newGuaran.ent_type = 'G';
    newGuaran.ent_code = entityModel.entCode;
    newGuaran.f_name   = entityModel.fNameCode;
    newGuaran.f_namet  = entityModel.fNameT ;
    newGuaran.l_namet  = entityModel.lNameT;
    newGuaran.f_name_e = entityModel.fNameECode;
    newGuaran.f_namee  = entityModel.fNameE ;
    newGuaran.l_namee  = entityModel.lNameE;
    newGuaran.address  = entityModel.address ;
    newGuaran.zip      = entityModel.zip ;
    newGuaran.post_cd  = entityModel.postCd;
    newGuaran.contract = entityModel.contract;
    newGuaran.address_eng = entityModel.addressEng;
    newGuaran.contract_e  = entityModel.contractEng;
    newGuaran.tel         = entityModel.tel ;
    newGuaran.new_card_no = entityModel.newCardNo ;
    newGuaran.last_usr  =  entityModel.lastUsr ;
    newGuaran.nationality_code = entityModel.nationalityCode ;
    if (entityModel.birthD) {
    newGuaran.birth_d = entityModel.birthD; }
    newGuaran.bus_detail = entityModel.busDetail ;
    newGuaran.address_eng2 = entityModel.addressEng2 ;
    newGuaran.fax_current = entityModel.faxCurrent ;
    newGuaran.contract_tel =  entityModel.contract ;
    newGuaran.grp_code     = entityModel.grpCode;
    newGuaran.mobile_phone = entityModel.mobilePhone;
    newGuaran.mobile_phone2 = entityModel.mobilePhone2 ;
    newGuaran.mobile_phone3 = entityModel.mobilePhone3 ;
    newGuaran.net_worth_year = entityModel.netWorthYear ;
    newGuaran.net_worth_amt = entityModel.netWorthAmt;
    newGuaran.regis_capital = entityModel.regisCapital ;
    newGuaran.paid_up_capital = entityModel.paidUpCapital ;
    newGuaran.cluster_ind = entityModel.clusterInd ;
    newGuaran.add_c  = entityModel.addC ;
    newGuaran.add_c_eng = entityModel.addCEng;
    newGuaran.add_c_eng2 = entityModel.addCEng2 ;
    newGuaran.add_m     = entityModel.addM ;
    newGuaran.add_m_eng = entityModel.addMEng ;
    newGuaran.add_m_eng2 = entityModel.addMEng2 ;
    newGuaran.add_o      = entityModel.addO ;
    newGuaran.add_o_eng   = entityModel.addOEng ;
    newGuaran.add_o_eng2  = entityModel.addOEng2;
    newGuaran.address_cont_cs = entityModel.addressContCs ;
    newGuaran.ages       = entityModel.ages ;
    newGuaran.authorize_by_e = entityModel.authorizeE ;
    newGuaran.authorize_by_t = entityModel.authorizeT ;
    newGuaran.branch_no  = entityModel.branchNo ;
    newGuaran.bus_ty       = entityModel.busTy ;
    newGuaran.bus_vat_flg   = entityModel.busVatFlg;
    newGuaran.business_type = entityModel.businessType ;
    newGuaran.card_by    = entityModel.cardBy;
    if (entityModel.cardExpireDate) {
    newGuaran.card_expire_date = entityModel.cardExpireDate ; }
    if (entityModel.cardIssueDate) {
    newGuaran.card_issue_date  = entityModel.cardIssueDate ;}

    newGuaran.card_no = entityModel.cardNo ;
    newGuaran.card_type = entityModel.cardType ;
    newGuaran.chairman  = entityModel.chairMan ;
    newGuaran.confirm_statment_flg  = entityModel.confirmStatmentFlag ;
    newGuaran.currency_code  = entityModel.currencyCode ;
    newGuaran.email_address = entityModel.emailAddress ;
    newGuaran.ent_ty  = entityModel.entTy ;
    if (entityModel.establishDate) {
    newGuaran.establish_date =  entityModel.establishDate; }
    newGuaran.fax_office  = entityModel.faxOffice ;
    newGuaran.high         = entityModel.high ;
    newGuaran.highest    = entityModel.highest ;
    newGuaran.highest_hp  = entityModel.highestHp;
    newGuaran.highest_ls   = entityModel.highestLs;
    newGuaran.ind_ty  =   entityModel.indTy ;
    newGuaran.loc_ty  = entityModel.locTy ;
    newGuaran.mkt_bgpl  =  entityModel.mktBgpl;
    newGuaran.mname  = entityModel.mName ;
    newGuaran.near   = entityModel.near ;
    newGuaran.near_eng = entityModel.nearEng ;
    newGuaran.near_o   = entityModel.nearO ;
    newGuaran.near_o_eng = entityModel.nearOEng ;
    newGuaran.occupa  = entityModel.occupa;
    newGuaran.office_department = entityModel.officeDepartment ;
    newGuaran.office_name = entityModel.officeName ;
    newGuaran.other_income = entityModel.otherIncome ;
    newGuaran.person_collect_billing  = entityModel.personCollectBilling ;
    newGuaran.place_billing = entityModel.placeBilling ;
    newGuaran.place_collect = entityModel.placeCollect ;
    newGuaran.posi   = entityModel.posi ;
    newGuaran.post_cd_c  = entityModel.postCdC;
    newGuaran.post_cd_m = entityModel.postCdM;
    newGuaran.post_cd_o = entityModel.postCdO;
    newGuaran.prv_cont  = entityModel.prvCont ;
    newGuaran.salary_per_year  = entityModel.salaryPerYear ;
    newGuaran.sales_amt  =  entityModel.salesAmt ;
    newGuaran.sales_year  =  entityModel.salesYear ;
    newGuaran.sex  = entityModel.sex ;
    newGuaran.spous_ages = entityModel.spousAges ;
    newGuaran.spous_occup = entityModel.spousOccup ;
    newGuaran.spous_office_department = entityModel.spousOfficeDepartment ;
    newGuaran.spous_office_name = entityModel.spousOfficeName ;
    newGuaran.spous_other_income = entityModel.spousOtherIncome;
    newGuaran.spous_posi  = entityModel.spousPosi ;
    newGuaran.spous_salary = entityModel.spousSalary ;
    newGuaran.spous_tel = entityModel.spousTel ;
    newGuaran.spouse_card_no  = entityModel.spousCardNo ;
    newGuaran.spouse_card_type = entityModel.spousCardType;
    newGuaran.status_m = entityModel.statusM ;
    newGuaran.tel_card = entityModel.telCard ;
    newGuaran.tel_o = entityModel.telO;
    newGuaran.web_site = entityModel.webSite;
    newGuaran.weight = entityModel.weight;
    newGuaran.zip_c = entityModel.zipC;
    newGuaran.zip_m = entityModel.zipM;
    newGuaran.zip_o  = entityModel.zipO;
    newGuaran.guar_code = entityModel.entCode;
    newGuaran.ref_code = this.creditApplicationService.caHead.ca_no ;
    // newGuaran.remark = entityModel.rem
    // newGuaran.relation_with_cus = entityModel.rele
    newGuaran.seq_no  =  maxGua ;
    newGuaran.business_detail = entityModel.busDetail;
    // newGuaran.ca_condition = entityModel.caC
    // newGuaran.ca_remark;
    // newGuaran.connect_since =  entityModel.con
    // newGuaran.cus_status  = entityModel.
    newGuaran.highest_amt = entityModel.highest ;
    // newGuaran.ncb_run_no  = entityModel.
    // newGuaran.org_crd_grd =  entityModel.org
    // newGuaran.prim_scr =  entityModel.pri
    // newGuaran.prim_scr_rsult =
    // newGuaran.req_run_no =
    newGuaran.responsibility_level = maxGua ;
    // newGuaran.score =
    // newGuaran.upd_crd_grd =
    // newGuaran.ver_emp_cd =
    // newGuaran.ver_opn =
    // newGuaran.bl_flag =
    // newGuaran.title_eng =
    // newGuaran.title_thi =
    newGuaran.card_type_desc = entityModel.cardTypeDesc ;
    // newGuaran.bus_detail_desc = entityModel.bus
    newGuaran.zip_desc = entityModel.zipCDesc ;
    // newGuaran.grp_name =  entityModel.grpCode ;
    // newGuaran.bus_ty_desc =
    newGuaran.regis_capital_mb   = entityModel.regisCapital ;
    newGuaran.paid_up_capital_mb = entityModel.paidUpCapital  ;
    newGuaran.sales_amt_mb       = entityModel.salesAmt ;
    newGuaran.net_worth_amt_mb   = entityModel.netWorthAmt ;
    newGuaran.zip_c_desc = entityModel.zipCDesc ;
    newGuaran.zip_o_desc = entityModel.zipODesc ;
    newGuaran.zip_m_desc = entityModel.zipMDesc ;


    return newGuaran;
  }
  onSelectGuarantor(selectGuarantor : caGuarantor){
      this.selectGuarantor = selectGuarantor ;
      this.creditApplicationService.setSelectGuarantor(selectGuarantor);
  }
  deleteGuarantor(){
    if ( (this.selectGuarantor) && (this.listcaGuarantor) ) {
      let delRow = this.listcaGuarantor.indexOf(this.selectGuarantor);
      this.listcaGuarantor.splice(delRow, 1);
      this.listcaGuarantor = [...this.listcaGuarantor];
      this.creditApplicationService.caHead.listcaguarantor =  this.listcaGuarantor;
      if (this.listcaGuarantor.length > 0)
      { this.onSelectGuarantor(this.listcaGuarantor[0]) ;}
      else
      {
        this.creditApplicationService.setSelectGuarantor(new caGuarantor());
      }

    }
  }
}
