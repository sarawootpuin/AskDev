/**
 * Created by pongsatorn.an on 23/09/2560.
 */


export class SaleCallAsset {

  public   sale_call_no;
  public   seq_no;
  public   credit_type;
  public   open_lc;
  public   asset_type;
  public   fin_amt;
  public   asset_detail;
  public   brand;
  public   purpose;
  public   competitor_lease;
  public   competitor_bank;
  public   competitor_other;
  public   competitor_irr;
  public   competitor_term;
  public   competitor_fin_pcnt;
  public   relate_ent_code;
  public   credit_type_other;
  public   unit;

  constructor()
  constructor(sale_call_no,seq_no)
  constructor(sale_call_no, seq_no, credit_type, open_lc, asset_type, fin_amt, asset_detail, brand, purpose, competitor_lease, competitor_bank, competitor_other, competitor_irr, competitor_term, competitor_fin_pcnt, relate_ent_code, credit_type_other, unit)
  constructor(sale_call_no?, seq_no=1, credit_type?, open_lc?, asset_type?, fin_amt?, asset_detail?, brand?, purpose?, competitor_lease?, competitor_bank?, competitor_other?, competitor_irr?, competitor_term?, competitor_fin_pcnt?, relate_ent_code?, credit_type_other?, unit?)
  {
    this.sale_call_no = sale_call_no;
    this.seq_no = seq_no;
    this.credit_type = credit_type;
    this.open_lc = open_lc;
    this.asset_type = asset_type;
    this.fin_amt = fin_amt;
    this.asset_detail = asset_detail;
    this.brand = brand;
    this.purpose = purpose;
    this.competitor_lease = competitor_lease;
    this.competitor_bank = competitor_bank;
    this.competitor_other = competitor_other;
    this.competitor_irr = competitor_irr;
    this.competitor_term = competitor_term;
    this.competitor_fin_pcnt = competitor_fin_pcnt;
    this.relate_ent_code = relate_ent_code;
    this.credit_type_other = credit_type_other;
    this.unit = unit;
  }

  static parse(json: any) {
    return  new SaleCallAsset(
      json.sale_call_no,
      json.seq_no,
      json.credit_type,
      json.open_lc,
      json.asset_type,
      json.fin_amt,
      json.asset_detail,
      json.brand,
      json.purpose,
      json.competitor_lease,
      json.competitor_bank,
      json.competitor_other,
      json.competitor_irr,
      json.competitor_term,
      json.competitor_fin_pcnt,
      json.relate_ent_code,
      json.credit_type_other,
      json.unit
    );
  }
}
