import {RegCh5Sub1} from "./reg-ch5-sub1";
export class RegCh5 {

  public agr_code;
  public document_no;
  public document_date;
  public ch5_doc_number;
  public ch5_doc_date;
  public transfer_to_collection_date;
  public deduct_amt;
  public customer_name;
  public disbursment_name;
  public remark1;
  public remark2;
  public input_user;
  public current_task;
  public transfer_to_collection_entry;
  public recieve_name;
  public ds_to_inc_number;
  public listCh5Sub1 : RegCh5Sub1[];

  constructor();


  constructor(agr_code, document_no, document_date, ch5_doc_number, ch5_doc_date,
              transfer_to_collection_date, deduct_amt, customer_name, disbursment_name,
              remark1, remark2, input_user, current_task, transfer_to_collection_entry,
              recieve_name, ds_to_inc_number, listCh5Sub1)

  constructor(agr_code?, document_no?, document_date?, ch5_doc_number?, ch5_doc_date?,
              transfer_to_collection_date?, deduct_amt?, customer_name?, disbursment_name?,
              remark1?, remark2?, input_user?, current_task?, transfer_to_collection_entry?,
              recieve_name?, ds_to_inc_number?, listCh5Sub1?) {

    this.agr_code = agr_code;
    this.document_no = document_no;
    this.document_date = document_date;
    this.ch5_doc_number = ch5_doc_number;
    this.ch5_doc_date = ch5_doc_date;
    this.transfer_to_collection_date = transfer_to_collection_date;
    this.deduct_amt = deduct_amt;
    this.customer_name = customer_name;
    this.disbursment_name = disbursment_name;
    this.remark1 = remark1;
    this.remark2 = remark2;
    this.input_user = input_user;
    this.current_task = current_task;
    this.transfer_to_collection_entry = transfer_to_collection_entry;
    this.recieve_name = recieve_name;
    this.ds_to_inc_number = ds_to_inc_number;
    this.listCh5Sub1  = listCh5Sub1;
  }

  static parse(json: any[]) {
    let data: RegCh5[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegCh5(
        json[i].agr_code,
        json[i].document_no,
        json[i].document_date,
        json[i].ch5_doc_number,
        json[i].ch5_doc_date,
        json[i].transfer_to_collection_date,
        json[i].deduct_amt,
        json[i].customer_name,
        json[i].disbursment_name,
        json[i].remark1,
        json[i].remark2,
        json[i].input_user,
        json[i].current_task,
        json[i].transfer_to_collection_entry,
        json[i].recieve_name,
        json[i].ds_to_inc_number,
        RegCh5Sub1.parse(json[i].listCh5Sub1)
        )
      )
    }
    return data;
  }

}
