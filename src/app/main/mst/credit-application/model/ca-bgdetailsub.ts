import {CaDetailappraisal} from "./ca-bgDetailappraisal";
import {searchobj} from "../../../../shared/center/search-un/search-un-model/searchobj";
export class caBgDetailSub {
  public ca_no;
  public sub_id;
  public sub_id2;
  public brand_code;
  public model_code;
  public chassis;
  public eng_num;
  public year;
  public reg_num;
  public detail;
  public asst_type;
  public asst_code;
  public asst_sub_code;
  public dealer_code;
  public comm_amt;
  public comm_pcnt;
  public color;
  public cc;
  public eqp_ty;
  public weight;
  public body;
  public miles;
  public seat;
  public enigne_type;
  public accessory;
  public asst_amt_e_vat;
  public asset_status;
  public fin_amt_e_vat;
  public buy_back_grnty_no;

  public  asset_type ;
  public  dealer_name ;
  public osCreditLine;
  public subIdDisplay;
  public  listbgdetailappraisal : CaDetailappraisal[];
  public listdetailsubdealer : searchobj[];

  constructor()
  constructor(ca_no, sub_id, sub_id2, brand_code, model_code, chassis, eng_num, year, reg_num, detail, asst_type, asst_code, asst_sub_code, dealer_code, comm_amt, comm_pcnt, color, cc, eqp_ty, weight, body, miles, seat, enigne_type, accessory, asst_amt_e_vat, asset_status, fin_amt_e_vat, buy_back_grnty_no,asset_type,dealer_name,
              osCreditLine,subIdDisplay,listbgdetailappraisal : CaDetailappraisal[],listdetailsubdealer:searchobj[])
  constructor(ca_no?, sub_id?, sub_id2?, brand_code?, model_code?, chassis?, eng_num?, year?, reg_num?, detail?, asst_type?, asst_code?, asst_sub_code?, dealer_code?, comm_amt?, comm_pcnt?, color?, cc?, eqp_ty?, weight?, body?, miles?, seat?, enigne_type?, accessory?, asst_amt_e_vat?, asset_status?, fin_amt_e_vat?, buy_back_grnty_no?,asset_type?,dealer_name?,
              osCreditLine?,subIdDisplay?,listbgdetailappraisal? : CaDetailappraisal[],listdetailsubdealer? :searchobj[]) {
    this.ca_no = ca_no;
    this.sub_id = sub_id;
    this.sub_id2 = sub_id2;
    this.brand_code = brand_code;
    this.model_code = model_code;
    this.chassis = chassis;
    this.eng_num = eng_num;
    this.year = year;
    this.reg_num = reg_num;
    this.detail = detail;
    this.asst_type = asst_type;
    this.asst_code = asst_code;
    this.asst_sub_code = asst_sub_code;
    this.dealer_code = dealer_code;
    this.comm_amt = comm_amt;
    this.comm_pcnt = comm_pcnt;
    this.color = color;
    this.cc = cc;
    this.eqp_ty = eqp_ty;
    this.weight = weight;
    this.body = body;
    this.miles = miles;
    this.seat = seat;
    this.enigne_type = enigne_type;
    this.accessory = accessory;
    this.asst_amt_e_vat = asst_amt_e_vat;
    this.asset_status = asset_status;
    this.fin_amt_e_vat = fin_amt_e_vat;
    this.buy_back_grnty_no = buy_back_grnty_no;
    this.asset_type = asset_type;
    this.dealer_name = dealer_name;
    this.osCreditLine = osCreditLine;
    this.subIdDisplay = subIdDisplay;
    this.listbgdetailappraisal = listbgdetailappraisal;
    this.listdetailsubdealer = listdetailsubdealer;
  }

  static
  parse(json: any[]) {
    let data: caBgDetailSub[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        let osDealer : number = 0;
        if(json[i].buy_back_grnty_no){
          osDealer = json[i].listdetailsubdealer.find((value)=>{
            return value.col3 == json[i].buy_back_grnty_no
          }).col4;
        }
        data.push(new caBgDetailSub(
          json[i].ca_no,
          json[i].sub_id,
          json[i].sub_id2,
          json[i].brand_code,
          json[i].model_code,
          json[i].chassis,
          json[i].eng_num,
          json[i].year,
          json[i].reg_num,
          json[i].detail,
          json[i].asst_type,
          json[i].asst_code,
          json[i].asst_sub_code,
          json[i].dealer_code,
          json[i].comm_amt,
          json[i].comm_pcnt,
          json[i].color,
          json[i].cc,
          json[i].eqp_ty,
          json[i].weight,
          json[i].body,
          json[i].miles,
          json[i].seat,
          json[i].enigne_type,
          json[i].accessory,
          json[i].asst_amt_e_vat,
          json[i].asset_status,
          json[i].fin_amt_e_vat,
          json[i].buy_back_grnty_no,
          json[i].asset_type,
          json[i].dealer_name,
          osDealer,
          json[i].sub_id + '.' +json[i].sub_id2,
          CaDetailappraisal.parse(json[i].listbgdetailappraisal),
          searchobj.parse(json[i].listdetailsubdealer)
        ))
      }
    }
    return data ;
  }
}
