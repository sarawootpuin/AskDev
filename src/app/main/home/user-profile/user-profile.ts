export class UserProfile{
  private _empCode:string;
  private _fullNameT:string;
  private _fullNameE:string;
  private _comCode:string;
  private _conciseBranchCode:string;
  private _deptCode:string;
  private _deptName:string;
  private _email:string;
  private _expireDate:string;
  private _position:string;
  private _saleExe:string;
  private _secCode:string;
  private _userName:string;

  constructor(){}


  get empCode(): string {
    return this._empCode;
  }

  set empCode(value: string) {
    this._empCode = value;
  }

  get fullNameT(): string {
    return this._fullNameT;
  }

  set fullNameT(value: string) {
    this._fullNameT = value;
  }

  get fullNameE(): string {
    return this._fullNameE;
  }

  set fullNameE(value: string) {
    this._fullNameE = value;
  }

  get comCode(): string {
    return this._comCode;
  }

  set comCode(value: string) {
    this._comCode = value;
  }

  get conciseBranchCode(): string {
    return this._conciseBranchCode;
  }

  set conciseBranchCode(value: string) {
    this._conciseBranchCode = value;
  }

  get deptCode(): string {
    return this._deptCode;
  }

  set deptCode(value: string) {
    this._deptCode = value;
  }

  get deptName(): string {
    return this._deptName;
  }

  set deptName(value: string) {
    this._deptName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get expireDate(): string {
    return this._expireDate;
  }

  set expireDate(value: string) {
    this._expireDate = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get saleExe(): string {
    return this._saleExe;
  }

  set saleExe(value: string) {
    this._saleExe = value;
  }

  get secCode(): string {
    return this._secCode;
  }

  set secCode(value: string) {
    this._secCode = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }
}
