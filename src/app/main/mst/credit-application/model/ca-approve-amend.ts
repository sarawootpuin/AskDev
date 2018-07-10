export class CaApproveAmend {
  constructor(
    public approve_name: string,
    public approve_person: string,
    public max_amount: number,
    public flg_sel: string
  ) {}

  static parse(json: any[]) {
    let data: CaApproveAmend[] = [];
    json.forEach(value => {
      data.push(
        new CaApproveAmend(
          value.approve_name,
          value.approve_person,
          value.max_amount,
          value.flg_sel
        )
      );
    });
    return data;
  }
}
