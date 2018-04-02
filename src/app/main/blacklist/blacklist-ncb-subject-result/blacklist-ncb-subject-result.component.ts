import {Component, OnInit, ViewChild} from '@angular/core';
import {BlacklistNcbService} from "../blacklist-ncb-service";
import {ModelNcbSubjectResult} from "./model/modelNcbSubjectResult";
import {Router} from "@angular/router";
import {BlacklistShowblacklistComponent} from "../blacklist-showblacklist/blacklist-showblacklist.component";

@Component({
  selector: 'app-blacklist-ncb-subject-result',
  templateUrl: './blacklist-ncb-subject-result.component.html'
})
export class BlacklistNcbSubjectResultComponent implements OnInit {
  modelNcbSubjectResult:ModelNcbSubjectResult[]=[];
  totalRecords:number;
  _tracking_id:string
  constructor(private blacklistNcbService:BlacklistNcbService,private router:Router) { }

  ngOnInit() {
   this._tracking_id = this.blacklistNcbService.getTracking_id();
    this._tracking_id = '65818'; //// for Test
    ///console.log(this._tracking_id)
    if(this._tracking_id) {
      this.blacklistNcbService.getNcbSubjectResult(this._tracking_id).subscribe(
        (data: any) => {
          this.modelNcbSubjectResult = ModelNcbSubjectResult.parse(data.LIST_DATA);
          this.blacklistNcbService.setModelNcbSubjectResult(this.modelNcbSubjectResult);
          // console.log(this.modelNcbSubjectResult);
          this.totalRecords = this.modelNcbSubjectResult.length;
        }
      );
    }
    else{
      this.router.navigate(['blacklist/ncb-search']);
    }
  }

  onRowSelect(evt)
  {
    this.router.navigate(['blacklist/ncb-view-ncrs']);
  }

}
