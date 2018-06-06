/**
 * Created by hataichanok.yo on 24/05/2561.
 */
export class cabgassersite {
  public   ref_code;
  public   lessee_site;
  public   adds_l1;
  public   adds_l2;
  public   adds_l3;
  public   owner_site;
  public   adds_o1;
  public   adds_o2;
  public   adds_o3;
  public   adds_s1;
  public   adds_s2;
  public   adds_s3;
  public   adds_s4;
  public   asset_site;

  constructor()
  constructor(ref_code,lessee_site,adds_l1,adds_l2,adds_l3,owner_site,adds_o1,adds_o2,adds_o3,adds_s1,adds_s2,adds_s3,adds_s4,asset_site)
  constructor(ref_code?,lessee_site?,adds_l1?,adds_l2?,adds_l3?,owner_site?,adds_o1?,adds_o2?,adds_o3?,adds_s1?,
              adds_s2?,adds_s3?,adds_s4?,asset_site?){
    this.ref_code    = ref_code;
    this.lessee_site = lessee_site;
    this.adds_l1 = adds_l1
    this.adds_l2 = adds_l2;
    this.adds_l3 = adds_l3;
    this.owner_site = owner_site;
    this.adds_o1 = adds_o1;
    this.adds_o2 = adds_o2;
    this.adds_o3 = adds_o3;
    this.adds_s1 = adds_s1;
    this.adds_s2 = adds_s2;
    this.adds_s3 = adds_s3;
    this.adds_s4 = adds_s4;
    this.asset_site = asset_site;
  }
  static
  parse(json: any[]) {
    let data: cabgassersite[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new cabgassersite(
          json[i].ref_code,
          json[i].lessee_site,
          json[i].adds_l1,
          json[i].adds_l2,
          json[i].adds_l3,
          json[i].owner_site,
          json[i].adds_o1,
          json[i].adds_o2,
          json[i].adds_o3,
          json[i].adds_s1,
          json[i].adds_s2,
          json[i].adds_s3,
          json[i].adds_s4,
          json[i].asset_site,

        ))
      }
    }
    return data ;
  }
}
