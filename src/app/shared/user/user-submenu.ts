export class UserMenu {
  constructor(
    public menuCode: string,
    public menuName: string
  ){}

  static parse(data: string) {
    let json = JSON.parse(data);
    return new UserMenu(
      json.PROGRAM_CODE,
      json.PROGRAM_NAME
    );
  }
}
