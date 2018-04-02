/**
 * Created by pongsatorn.an on 12/01/2561.
 */
export class caAssersite {
  public   com_code;
  public   ref_code;
  public   main_entry;
  public   order_from;
  public   order_to;
  public   all_asset;
  public   active;
  public   change_site;
  public   loc_name;
  public   loc_addr1;
  public   loc_addr2;
  public   loc_addr3;
  public   loc_addr4;
  public   lease_name;
  public   lease_addr1;
  public   lease_addr2;
  public   lease_addr3;
  public   owner_name;
  public   owner_addr1;
  public   owner_addr2;
  public   owner_addr3;
  public   eff_date;
  public   input_date;
  public   input_usr;
  public   last_upd;
  public   last_usr;
  public   remark;
  public   reject_reason;
  public   current_task;

  constructor()
  constructor(com_code, ref_code, main_entry, order_from, order_to, all_asset, active, change_site, loc_name, loc_addr1, loc_addr2, loc_addr3, loc_addr4, lease_name, lease_addr1, lease_addr2, lease_addr3, owner_name, owner_addr1, owner_addr2, owner_addr3, eff_date, input_date, input_usr, last_upd, last_usr, remark, reject_reason, current_task)
  constructor(com_code?, ref_code?, main_entry?, order_from?, order_to?, all_asset?,
              active?, change_site?, loc_name?, loc_addr1?, loc_addr2?, loc_addr3?, loc_addr4?,
              lease_name?, lease_addr1?, lease_addr2?, lease_addr3?, owner_name?, owner_addr1?,
              owner_addr2?, owner_addr3?, eff_date?, input_date?, input_usr?, last_upd?, last_usr?,
              remark?, reject_reason?, current_task?) {
    this.com_code = com_code;
    this.ref_code = ref_code;
    this.main_entry = main_entry;
    this.order_from = order_from;
    this.order_to = order_to;
    this.all_asset = all_asset;
    this.active = active;
    this.change_site = change_site;
    this.loc_name = loc_name;
    this.loc_addr1 = loc_addr1;
    this.loc_addr2 = loc_addr2;
    this.loc_addr3 = loc_addr3;
    this.loc_addr4 = loc_addr4;
    this.lease_name = lease_name;
    this.lease_addr1 = lease_addr1;
    this.lease_addr2 = lease_addr2;
    this.lease_addr3 = lease_addr3;
    this.owner_name = owner_name;
    this.owner_addr1 = owner_addr1;
    this.owner_addr2 = owner_addr2;
    this.owner_addr3 = owner_addr3;
    this.eff_date = eff_date;
    this.input_date = input_date;
    this.input_usr = input_usr;
    this.last_upd = last_upd;
    this.last_usr = last_usr;
    this.remark = remark;
    this.reject_reason = reject_reason;
    this.current_task = current_task;
  }



  static
  parse(json: any[]) {
    let data: caAssersite[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caAssersite(
          json[i].com_code,
          json[i].ref_code,
          json[i].main_entry,
          json[i].order_from,
          json[i].order_to,
          json[i].all_asset,
          json[i].active,
          json[i].change_site,
          json[i].loc_name,
          json[i].loc_addr1,
          json[i].loc_addr2,
          json[i].loc_addr3,
          json[i].loc_addr4,
          json[i].lease_name,
          json[i].lease_addr1,
          json[i].lease_addr2,
          json[i].lease_addr3,
          json[i].owner_name,
          json[i].owner_addr1,
          json[i].owner_addr2,
          json[i].owner_addr3,
          json[i].eff_date,
          json[i].input_date,
          json[i].input_usr,
          json[i].last_upd,
          json[i].last_usr,
          json[i].remark,
          json[i].reject_reason,
          json[i].current_task
        ))
      }
    }
    return data ;
  }
}
