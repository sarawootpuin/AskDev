import {Injectable} from '@angular/core';

@Injectable()
export class UserStorage {
  public code: string = 'u_code';
  public comCode: string = 'u_comcode';
  public comCodePort: string = 'u_comcodePort';
  public userName: string = 'u_username';
  public accessCompany: string = 'u_access_company';
  public ratePen: string = 'u_rate_pen';
  public vatRate: string = 'u_vat_rate';
  public grace: string = 'u_grace';
  public newEntCode: string = 'u_newEntCode';
  public newEntType: string = 'u_newEntType';

  constructor() {
  }

  getStorageSessionToLocal(code: string,comCode:string,comCodePort: string,userName:string) {
    localStorage.setItem(this.code, code);
    localStorage.setItem(this.comCode, comCode);
    localStorage.setItem(this.comCodePort, comCodePort);
    localStorage.setItem(this.userName, userName);
    localStorage.setItem(this.accessCompany, this.getAccessCompany());
  }

  getStorageLocalToSession() {
    sessionStorage.setItem(this.code, this.getCode());
    sessionStorage.setItem(this.comCode, this.getComCode());
    sessionStorage.setItem(this.comCodePort, this.getComCodePort());
    sessionStorage.setItem(this.userName, this.getUserName());
    sessionStorage.setItem(this.accessCompany, this.getAccessCompany());
  }

  setTypeNewEntCode(newEntCode:string,newEntType:string){
    //console.log(newEntType,newEntCode);
    sessionStorage.setItem(this.newEntCode,newEntCode);
    sessionStorage.setItem(this.newEntType,newEntType);
  }

  storageCode(value: string) {
    sessionStorage.setItem(this.code, value);
    // localStorage.setItem(this.code, value);
  }

  storageComCode(value: string) {
    sessionStorage.setItem(this.comCode, value);
    // localStorage.setItem(this.comCode, value);
  }

  storageComCodePort(value: string) {
    sessionStorage.setItem(this.comCodePort, value);
    // localStorage.setItem(this.comCodePort, value);
  }

  storageUserName(value: string) {
    sessionStorage.setItem(this.userName, value);
  }

  storageAccessCompany(value: string) {
    sessionStorage.setItem(this.accessCompany, value);
  }

  storageRatePen(value: string) {
    sessionStorage.setItem(this.ratePen, value);
  }

  storageVatRate(value: string) {
    sessionStorage.setItem(this.vatRate, value);
  }

  storageGrace(value: string) {
    sessionStorage.setItem(this.grace, value);
  }

  removeStorageNewEntType() {
    sessionStorage.removeItem(this.newEntCode);
    sessionStorage.removeItem(this.newEntType);
  }

  removeStorage() {
    sessionStorage.removeItem(this.code);
    sessionStorage.removeItem(this.comCode);
    sessionStorage.removeItem(this.comCodePort);
    sessionStorage.removeItem(this.userName);
    sessionStorage.removeItem(this.accessCompany);
    sessionStorage.removeItem(this.ratePen);
    sessionStorage.removeItem(this.vatRate);
    sessionStorage.removeItem(this.grace);

    localStorage.removeItem(this.code);
    localStorage.removeItem(this.comCode);
    localStorage.removeItem(this.comCodePort);
    localStorage.removeItem(this.userName);
    localStorage.removeItem(this.accessCompany);
  }

  getCode(): string {
    if (!sessionStorage.getItem(this.code)) {
      return localStorage.getItem(this.code);
    } else {
      return sessionStorage.getItem(this.code)
    }
  }

  getComCode(): string {
    if (!sessionStorage.getItem(this.comCode)){
      return localStorage.getItem(this.comCode);
    } else {
      return sessionStorage.getItem(this.comCode);
    }
  }

  getComCodePort(): string {
    if (!sessionStorage.getItem(this.comCodePort)){
      return localStorage.getItem(this.comCodePort);
    } else {
      return sessionStorage.getItem(this.comCodePort);
    }
  }

  getUserName(): string {
    if (!sessionStorage.getItem(this.userName)){
      return localStorage.getItem(this.userName);
    } else {
      return sessionStorage.getItem(this.userName);
    }
  }

  getAccessCompany(): string {
    if (!sessionStorage.getItem(this.accessCompany)){
      return localStorage.getItem(this.accessCompany);
    } else {
      return sessionStorage.getItem(this.accessCompany);
    }
  }

  getRatePen(): string {
    return sessionStorage.getItem(this.ratePen);
  }

  getVatRate(): string {
    return sessionStorage.getItem(this.vatRate);
  }

  getGrace(): string {
    return sessionStorage.getItem(this.grace);
  }

  getnewEntCode():string{
    return sessionStorage.getItem(this.newEntCode);
  }

  getnewEntType():string{
    return sessionStorage.getItem(this.newEntType);
  }
}
