import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Search} from "./model/search.model";
import {ComCode} from "./model/comcode.model";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CCMService} from "../../../ccm.service";
import {LazyLoadEvent} from "primeng/primeng";
import {UserStorage} from "../../../../../../shared/user/user.storage.service";
import {TodoService} from "../../../../../home/todo/todo.service";
import {CustinfoService} from "./custinfo/custinfo.service";

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html'
})
export class ConditionComponent implements OnInit {
  arrSearch: Search[];
  dsSearch: Search[];

  listComCode: ComCode[] = [];
  vFG_Search: FormGroup;

  vField_Name: string;
  vComCode: string;
  vCon_Agr_Code: string;
  vNewTr: string;
  // vSearchText: string = "10-6011015";
  // vSearchText: string = "52-5900087";
  // vSearchText: string = "59-2-00402";
  // vSearchText: string = "10-5801603";
  vSearchText: string = "";

  totalRecords: Number;

  waiting: Boolean = false;
  displayWarn: Boolean = false;
  msgWarning: string;
  vFound_LG_Sue: Boolean = false;

  vNavigate_To: string = '';

  userName: string = '';
  code: string = '';

  //path custinfo.routing.module.ts
  vDefaultPage: string = 'update';

  constructor(private ccmService: CCMService,
              private custService: CustinfoService,
              private route: ActivatedRoute,
              private router: Router,
              private userStorage: UserStorage) {
    this.vFG_Search = new FormGroup({
      vFG_Field: new FormControl()
    });
    this.vComCode = this.userStorage.getComCode();
  }

  ngOnInit() {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();

    this.ccmService.getComCode("web", this.code).subscribe(
      (data: any) => {
        for (let i = 0; i < data.LIST_DATA.length; i++) {
          this.listComCode.push(ComCode.parse(JSON.stringify(data.LIST_DATA[i])));
        }
      }
    );

    this.vField_Name = 'AGR_CODE';

  }

  onSubmit(value, event) {
    if (value !== "") {
      if (event.keyCode === 13) {
        document.body.style.cursor = 'wait';
        this.waiting = true;
        this.arrSearch = [];
        // console.log(this.vAccessCompany.valueOf());
        this.ccmService.getCondition("web", this.code, value, this.vComCode.valueOf()).subscribe(
          (data: any) => {
            // console.log(data);
            if (data.CODE === '200') {

              this.arrSearch = Search.parse(data.LIST_DATA);
              this.dsSearch = this.arrSearch;
              this.totalRecords = this.arrSearch.length;
              this.vNewTr = this.arrSearch[0].new_tr;

              if (this.arrSearch[0].found_agr === 'Y') {
                this.vCon_Agr_Code = this.arrSearch[0].agr_code;
                this.ccmService.setAGR_CODE(this.vCon_Agr_Code);
                window.localStorage['data'] = this.vCon_Agr_Code;
                this.onNavigate();
              }

            } else if (data.CODE === '204') {
              this.arrSearch = [];
            }

            document.body.style.cursor = 'default';
            this.waiting = false;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    }
  }

  onSelectedField(pField: string) {
    this.vSearchText = "";
    this.vField_Name = pField;
  }

  onSelectedComCode(pComCode: string) {
    this.vComCode = pComCode;
  }

  onSelectedRow(e) {
    window.scrollTo(0,0);
    this.vCon_Agr_Code = e.data.agr_code;
    this.vNewTr = e.data.new_tr;
    this.onNavigate();
  }

  private onNavigate() {
    this.ccmService.Found_LG_Sue("web", this.code, this.vComCode.valueOf(), this.vCon_Agr_Code.valueOf()).subscribe(
      (data: any) => {
        this.vFound_LG_Sue = data.DATA;
        if (this.vNewTr === 'FP') {
          this.arrSearch = [];
          if (this.vComCode === 'ASKH') {
            this.msgWarning = ' คุณดวงกมล  หมายเลข 512' + '<br>' +
              ' คุณเสาวภา  หมายเลข 528' + '<br>' +
              'คุณนันณรัณ  หมายเลข 529' + '<br>' +
              ' คุณสุวรรณี  หมายเลข 632' + '<br>' +
              ' คุณอธิรัฐ   หมายเลข 549';
          } else if (this.vComCode === 'ASKR') {
            this.msgWarning = ' คุณปิยวัตร จงสวัสดิ์';
          }

          this.displayWarn = true;
        } else if ((this.vNewTr !== 'P') && (this.vNewTr !== 'CL')) {
          // this.router.navigate(['custinfo'],{relativeTo:this.route});
          if (this.vFound_LG_Sue) {
            this.vNavigate_To = "legalinfo";
            // this.router.navigate(['CustomerService/legalinfo']);
          } else {
            // this.vNavigate_To = "custinfo";
            // this.router.navigate(['./custinfo/'+this.vDefaultPage],{relativeTo:this.route});
            // this.router.navigate(['../custinfo/'],{relativeTo:this.route});
            this.router.navigate(['../custinfo/'],{
              relativeTo: this.route,
              queryParams: {
                comCode: this.vComCode.valueOf(),
                agrCode: this.vCon_Agr_Code.valueOf()
              }
            });
          }
        } else {
          // if (this.vFound_LG_Sue) {
          //   this.vNavigate_To = "legalpl";
          //   // this.router.navigate(['CustomerService/legalpl']);
          // } else {
            // this.vNavigate_To = "arpl";
            this.router.navigate(['../arpl/'],{
              relativeTo:this.route,
              queryParams: {
                comCode: this.vComCode.valueOf(),
                agrCode: this.vCon_Agr_Code.valueOf()
              }
            });
          // }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  loadCondition(event: LazyLoadEvent) {
    // this.FlowLookUp = this.dataSource.slice(event.first, (event.first + event.rows));

    setTimeout(() => {
      if (this.dsSearch) {
        this.arrSearch = this.dsSearch.slice(event.first, (event.first + event.rows));
      }
    }, 200);
  }
}
