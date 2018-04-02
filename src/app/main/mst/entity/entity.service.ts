import {EventEmitter, Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {Observable} from "rxjs/Observable";
import {EntityMaster} from "./model/entity-master";
import {Subject} from "rxjs/Subject";
import {EntityModel} from "./model/entity-model";

@Injectable()
export class EntityService {
  public prefix = new Subject<EntityMaster[]>();
  public prefixEng = new Subject<EntityMaster[]>();
  public cardType = new Subject<EntityMaster[]>();
  public marriageStatus = new Subject<EntityMaster[]>();
  public nationality = new Subject<EntityMaster[]>();
  public sex = new Subject<EntityMaster[]>();
  public customerGroup = new Subject<EntityMaster[]>();
  public businessType = new Subject<EntityMaster[]>();
  public businessDetail = new Subject<EntityMaster[]>();
  public occupation = new Subject<EntityMaster[]>();
  public positionBg = new Subject<EntityMaster[]>();
  public industry = new Subject<EntityMaster[]>();
  public bank = new Subject<EntityMaster[]>();
  public industryEng = new Subject<EntityMaster[]>();
  public address = new Subject<EntityMaster[]>();

  constructor(private http: HttpClient, private service: ServiceEndpoint) {
  }

  searchCustomerPaging() {
    const url = `http://27.254.21.113:8088/AskJsonWebServicesApp11/module/EIP_Services/saleCall_searchCustomer?device=Web&comCode=BGPL&usrCode=0000000957&page=1&pageSize=100&field=cardNo&value=11`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  searchCustomer(device: string, userCode: string, comCode: string, vCondition: string) {
    const url = this.service.url + this.service.entity_api + `/ask/Entity/SearchCustomer?device=${device}&user=${userCode}
    &com_code=${comCode}&condition=${vCondition}`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  openEntity(device: string, userCode: string, comCode: string, entCode: string) {
    const url = this.service.url + this.service.entity_api + '/ask/Entity/OpentCustomer?device=' + device
      + '&user=' + userCode + '&com_code=' + comCode + '&ent_code=' + entCode + '';
    console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  getMasterData(device: string, userCode: string, comCode: string, listType: string) {
    const url = this.service.url + this.service.appform_api + '/ask/common/GetListData?device=' + device
      + '&user=' + userCode + '&com_code=' + comCode + '&listType=' + listType;
    console.log(url)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  saveEntity(entityRequest: EntityModel) {
    const url = this.service.url + this.service.entity_api + '/ask/Entity/SaveEntity';
    console.log(url)
    let data = JSON.stringify(entityRequest);
    console.log(data)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  test() {
    const url1 = this.service.url + this.service.common_tps + `/ask/common/getMenu?device=web&userCode=1000000821`;
    const url2 = this.service.url + this.service.common_tps + `/ask/common/getMenu?device=web&userCode=1000000729`;
    const combine = Observable.forkJoin(
      this.http.get(url1),
      this.http.get(url2)
    )

    combine.subscribe((datas) => {
      const [data_changes, data_all] = datas;
      console.log("data_changes", data_changes);
      console.log("data_all", data_all);
    });
  }

  setPrefix(val) {
    this.prefix.next(val);
  }

  setPrefixEng(val) {
    this.prefixEng.next(val);
  }

  setCardType(val) {
    this.cardType.next(val);
  }

  setMarriageStatus(val) {
    this.marriageStatus.next(val);
  }

  setNationality(val) {
    this.nationality.next(val);
  }

  setSex(val) {
    this.sex.next(val);
  }

  setCustomerGroup(val) {
    this.customerGroup.next(val);
  }

  setBusinessType(val) {
    this.businessType.next(val);
  }

  setBusinessDetail(val) {
    this.businessDetail.next(val);
  }

  setOccupation(val) {
    this.occupation.next(val);
  }

  setPositionBg(val) {
    this.positionBg.next(val);
  }

  setIndustry(val) {
    this.industry.next(val);
  }

  setBank(val) {
    this.bank.next(val);
  }

  setIndustryEng(val) {
    this.industryEng.next(val);
  }

  setAddress(val) {
    this.address.next(val);
  }

  saveCusCode = new EventEmitter<string>();
  setSaveCusCode( cusCode :string ){
     this.saveCusCode.emit(cusCode);
  }


}
