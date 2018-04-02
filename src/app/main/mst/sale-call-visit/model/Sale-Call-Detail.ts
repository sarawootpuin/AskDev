import {SaleCallAttendees} from "./Sale-Call-Attendees";
import {SaleCallVisitOutSide} from "./Sale-Call-VisitOutSide";
import {SaleCallAsset} from "./Sale-Call-Asset";
import {DatePipe} from "@angular/common";
/**
 * Created by pongsatorn.an on 15/08/2560.
 */
export class SaleCallDetail{
  public    sale_call_no;
  public    seq_no;
  public    sale_call_dt;
  public    sale_call_type;
  public    last_upd;
  public    usr_upd;
  public    call_visit_date;
  public    call_visit_by;
  public    follow_up_point;
  public    follow_up_response;
  public    follow_date:string ;
  public    sale_call_note;
  public    traffic;
  public    interview;
  public    cont_person_code;
  public    input_by;
  public    input_date;
  public    cancel_date;
  public    purpose;
  public    call_result_flg;
  public    call_result_detail;
  public    submit_flg;
  public    mobile_sorce;
  public    call_by_name;
  public    title_en;
  public    title_th;
  public    name_en;
  public    name_th;
  public    department;
  public    phone;
  public    phone_ext;
  public    mobile;
  public    email;
  public    position;
  public    title_en_desc;
  public    purpose_full;
  public    call_result_detail_desc;
  public    result_reason_col10;
  public    sale_call_type_desc;
  public    prepare_flag;
  public    reject_flag;
  public    follow_flag;

  public asset:SaleCallAsset;
  public visitOutSide:SaleCallVisitOutSide;
  public listAttendeesB:SaleCallAttendees[];
  public listAttendeesC:SaleCallAttendees[];


  constructor()
  constructor(sale_call_no, seq_no)
  constructor(sale_call_no, seq_no, sale_call_dt, sale_call_type, last_upd, usr_upd, call_visit_date,
              call_visit_by, follow_up_point, follow_up_response, follow_date, sale_call_note, traffic,
              interview, cont_person_code, input_by, input_date, cancel_date, purpose, call_result_flg,
              call_result_detail, submit_flg, mobile_sorce, call_by_name, title_en, title_th, name_en,
              name_th, department, phone, phone_ext, mobile, email, position, title_en_desc, purpose_full,
              call_result_detail_desc, result_reason_col10, sale_call_type_desc, prepare_flag, reject_flag,
              follow_flag
              ,asset
              , visitOutSide
              , listAttendeesB
              , listAttendeesC)
  constructor(sale_call_no?, seq_no?, sale_call_dt?, sale_call_type?, last_upd?, usr_upd?, call_visit_date?,
              call_visit_by?, follow_up_point?, follow_up_response?, follow_date?, sale_call_note?, traffic?,
              interview?, cont_person_code?, input_by?, input_date?, cancel_date?, purpose?, call_result_flg?,
              call_result_detail?, submit_flg?, mobile_sorce?, call_by_name?, title_en?, title_th?, name_en?,
              name_th?, department?, phone?, phone_ext?, mobile?, email?, position?, title_en_desc?, purpose_full?,
              call_result_detail_desc?, result_reason_col10?, sale_call_type_desc?, prepare_flag?, reject_flag?,
              follow_flag?
            , asset?
            , visitOutSide?
            , listAttendeesB?
            , listAttendeesC?){
    this.sale_call_no = sale_call_no;
    this.seq_no = seq_no;
    this.sale_call_dt = sale_call_dt;
    this.sale_call_type = sale_call_type;
    this.last_upd = last_upd;
    this.usr_upd = usr_upd;
    this.call_visit_date = call_visit_date;
    this.call_visit_by = call_visit_by;
    this.follow_up_point = follow_up_point;
    this.follow_up_response = follow_up_response;
    this.follow_date = follow_date;
    this.sale_call_note = sale_call_note;
    this.traffic = traffic;
    this.interview = interview;
    this.cont_person_code = cont_person_code;
    this.input_by = input_by;
    this.input_date = input_date;
    this.cancel_date = cancel_date;
    this.purpose = purpose;
    this.call_result_flg = call_result_flg;
    this.call_result_detail = call_result_detail;
    this.submit_flg = submit_flg ? submit_flg : 'N';
    this.mobile_sorce = mobile_sorce;
    this.call_by_name = call_by_name;
    this.title_en = title_en;
    this.title_th = title_th;
    this.name_en = name_en;
    this.name_th = name_th;
    this.department = department;
    this.phone = phone;
    this.phone_ext = phone_ext;
    this.mobile = mobile;
    this.email = email;
    this.position = position;
    this.title_en_desc = title_en_desc;
    this.purpose_full = purpose_full;
    this.call_result_detail_desc = call_result_detail_desc;
    this.result_reason_col10 = result_reason_col10;
    this.sale_call_type_desc = sale_call_type_desc;
    this.prepare_flag = prepare_flag;
    this.reject_flag = reject_flag;
    this.follow_flag = follow_flag;
    this.asset               = asset? asset :  new SaleCallAsset(this.sale_call_no,this.seq_no)  ;
    this.visitOutSide        = visitOutSide? visitOutSide : new SaleCallVisitOutSide(this.sale_call_no,this.seq_no,this.call_visit_by,this.sale_call_dt)  ;
    this.listAttendeesB      = listAttendeesB;
    this.listAttendeesC      = listAttendeesC;

  }

  static parse(json: any[]) {
    let data: SaleCallDetail[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new SaleCallDetail(
          json[i].sale_call_no,
          json[i].seq_no,
          json[i].sale_call_dt,
          json[i].sale_call_type,
          json[i].last_upd,
          json[i].usr_upd,
          json[i].call_visit_date,
          json[i].call_visit_by,
          json[i].follow_up_point,
          json[i].follow_up_response,
          json[i].follow_date,
          json[i].sale_call_note,
          json[i].traffic,
          json[i].interview,
          json[i].cont_person_code,
          json[i].input_by,
          json[i].input_date,
          json[i].cancel_date,
          json[i].purpose,
          json[i].call_result_flg,
          json[i].call_result_detail,
          json[i].submit_flg,
          json[i].mobile_sorce,
          json[i].call_by_name,
          json[i].title_en,
          json[i].title_th,
          json[i].name_en,
          json[i].name_th,
          json[i].department,
          json[i].phone,
          json[i].phone_ext,
          json[i].mobile,
          json[i].email,
          json[i].position,
          json[i].title_en_desc,
          json[i].purpose_full,
          json[i].call_result_detail_desc,
          json[i].result_reason_col10,
          json[i].sale_call_type_desc,
          json[i].prepare_flag,
          json[i].reject_flag,
          json[i].follow_flag ,
          SaleCallAsset.parse(json[i].SALE_CALL_ASSET),
          SaleCallVisitOutSide.parse(json[i].SALE_CALL_VISIT_OUTSIDE),
          SaleCallAttendees.parse(json[i].SALE_CALL_VISIT_ATTENDEES_B),
          SaleCallAttendees.parse(json[i].SALE_CALL_VISIT_ATTENDEES_C)
        ))
    }
    }
    return data;
  }
}
