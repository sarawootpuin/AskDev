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

  constructor() {
  }

  storageCode(value: string) {
    sessionStorage.setItem(this.code, value);
  }

  storageComCode(value: string) {
    sessionStorage.setItem(this.comCode, value);
  }

  storageComCodePort(value: string) {
    sessionStorage.setItem(this.comCodePort, value);
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

  removeStorage() {
    sessionStorage.removeItem(this.code);
    sessionStorage.removeItem(this.comCode);
    sessionStorage.removeItem(this.comCodePort);
    sessionStorage.removeItem(this.userName);
    sessionStorage.removeItem(this.accessCompany);
    sessionStorage.removeItem(this.ratePen);
    sessionStorage.removeItem(this.vatRate);
    sessionStorage.removeItem(this.grace);
  }

  getCode(): string {
    return sessionStorage.getItem(this.code);
  }

  getComCode(): string {
    return sessionStorage.getItem(this.comCode);
  }

  getComCodePort(): string {
    return sessionStorage.getItem(this.comCodePort);
  }

  getUserName(): string {
    return sessionStorage.getItem(this.userName);
  }

  getAccessCompany(): string {
    return sessionStorage.getItem(this.accessCompany);
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
}
