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
    localStorage.setItem(this.code, value);
  }

  storageComCode(value: string) {
    localStorage.setItem(this.comCode, value);
  }

  storageComCodePort(value: string) {
    localStorage.setItem(this.comCodePort, value);
  }

  storageUserName(value: string) {
    localStorage.setItem(this.userName, value);
  }

  storageAccessCompany(value: string) {
    localStorage.setItem(this.accessCompany, value);
  }

  storageRatePen(value: string) {
    localStorage.setItem(this.ratePen, value);
  }

  storageVatRate(value: string) {
    localStorage.setItem(this.vatRate, value);
  }

  storageGrace(value: string) {
    localStorage.setItem(this.grace, value);
  }

  removeStorage() {
    localStorage.removeItem(this.code);
    localStorage.removeItem(this.comCode);
    localStorage.removeItem(this.comCodePort)
    localStorage.removeItem(this.userName);
    localStorage.removeItem(this.accessCompany);
    localStorage.removeItem(this.ratePen);
    localStorage.removeItem(this.vatRate);
    localStorage.removeItem(this.grace);
  }

  getCode(): string {
    return localStorage.getItem(this.code);
  }

  getComCode(): string {
    return localStorage.getItem(this.comCode);
  }

  getComCodePort(): string {
    return localStorage.getItem(this.comCodePort);
  }

  getUserName(): string {
    return localStorage.getItem(this.userName);
  }

  getAccessCompany(): string {
    return localStorage.getItem(this.accessCompany);
  }

  getRatePen(): string {
    return localStorage.getItem(this.ratePen);
  }

  getVatRate(): string {
    return localStorage.getItem(this.vatRate);
  }

  getGrace(): string {
    return localStorage.getItem(this.grace);
  }
}
