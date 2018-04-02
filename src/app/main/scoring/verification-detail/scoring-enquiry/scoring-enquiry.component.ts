import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ScrEnquiry} from "../../model/scoring-enquiry.model";
import {VerificationDetailService} from "../verification-detail.service";
import {Subscription} from "rxjs/Subscription";
import {LazyLoadEvent} from "primeng/primeng";
import {DropdownCompanyModel} from "../../model/dropdown-company.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-scoring-enquiry',
  templateUrl: './scoring-enquiry.component.html',
  styleUrls: ['./scoring-enquiry.component.css']
})
export class ScoringEnquiryComponent implements OnInit, OnDestroy  {

  listScoringEnquiry: ScrEnquiry[];
  subscription: Subscription;
  subscriptionSearch: Subscription;
  listCompany :DropdownCompanyModel[];
  totalRecords: number;
  rows: number;
  currentPage: number;
  comCode:string='';
  refNo:string='';
  cusName:string='';
  entCd:string='';
  isLoading = true;
  getMaxPage :string='TRUE';
  @ViewChild('dialogWarning') dialogWarning : AlertDialogComponent;



  constructor(private router: Router,
              private route: ActivatedRoute,
              private verficationDetailService: VerificationDetailService) {
  }

  ngOnInit() {
    this.comCode = this.verficationDetailService.comCode;
    this.subscription = this.verficationDetailService.getGroupSearchScoringEnquiry().subscribe(
      (data: any) => {
        this.listCompany  = DropdownCompanyModel.parse(data.DATA.LIST_COMPANY);
        this.getlistScoringEnquiry();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getlistScoringEnquiry(){
    this.isLoading = true;
    this.subscriptionSearch = this.verficationDetailService.getListScoringEnquiry(this.comCode,this.refNo,this.cusName,this.entCd).subscribe(
      (data: any) => {
        this.listScoringEnquiry = ScrEnquiry.parse(data.LIST_DATA);
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
        console.log(error);
      }
    );


  }
  onChangeCompany(idx) {
    this.comCode = this.listCompany[idx].com_code;
    this.getlistScoringEnquiry()
  }
  onDbClickRowTable(event){
    if (event.data.run_no) {
      this.verficationDetailService.checkReadOnly = true;
      this.verficationDetailService.checkEnquiry = true;
      this.router.navigate(['/scoring/verify-detail']
        , {
          relativeTo: this.route,
          queryParams: {
            run_no: event.data.run_no, com_code: event.data.com_code, ref_no: event.data.ref_no
            , ent_cd: event.data.ent_cd
          }
        });
    }
    else {

      this.dialogWarning.setTitle("");
      this.dialogWarning.setMessage("รายการนี้ไม่สามารถเรียกดูได้ เนื่องจากยังไม่ได้คีย์งานเข้าระบบ");
      this.dialogWarning.open();

    }
  }
  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscription != null) {
      this.subscriptionSearch.unsubscribe();
    }

  }

}
