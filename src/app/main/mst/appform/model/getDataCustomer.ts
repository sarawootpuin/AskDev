import {Nationality} from "./nationality";
import {Bank} from "./bank";
import {Card} from "./card";
import {Industry} from "./industry";
/**
 * Created by wisarut.su on 20/12/2560.
 */
export class GetDataCustomer {
  public entCode: any;
  public fNameE: any; // f_namee
  public fNameT: any; // f_namet
  public zip: any;
  public contract: any;
  public grpCode: any;
  public address: any;
  public salaryPerYear: any;
  public indTy: any;
  public occupa: any;
  public tel: any;
  public near: any;
  public entTy: any;
  public busTy: any;
  public zipC: any;
  public addC: any;
  public zipO: any;
  public addO: any;
  public zipM: any;
  public addM: any;
  public comCode: any;
  public lastUpd: any;
  public lastUsr: any;
  public ages: any;
  public fName: any;
  public statusM: any;
  public mName: any;
  public telO: any;
  public nearO: any;
  public posi: any;
  public cardBy: any;
  public locTy: any;
  public birthD: any;
  public inputDate: any;
  public inputUser: any;
  public tNameT: any; // f_name
  public tNameE: any; // f_name_e
  public authorizeByT: any;
  public authorizeByE: any;
  public mobilePhone: any;
  public lNameE: any;
  public lNameT: any;
  public cardNo: any;
  public cardIssueDate: any;
  public cardExpireDate: any;
  public cardType: any;
  public newCardNo: any;
  public emailAddress: any;
  public officeName: any;
  public officeDepartment: any;
  public sposAges: any;
  public sposOccupa: any;
  public sposPosi: any;
  public sposSalary: any;
  public sposOtherIncome: any;
  public sposOfficeName: any;
  public sposOfficeDepartment: any;
  public sposCardNo: any;
  public sposCardType: any;
  public otherIncome: any;
  public sposTel: any;
  public telCard: any;
  public postCd: any;
  public postCdC: any;
  public postCdO: any;
  public postCdM: any;
  public mobilePhone2: any;
  public mobilePhone3: any;
  public faxCurrent: any;
  public faxOffice: any;
  public sex: any;
  public high: any;
  public weigth: any;
  public regisCapital: any;
  public paidUpCapital: any;
  public addressEng: any;
  public nearEng: any;
  public addCEng: any;
  public addMEng: any;
  public addOEng: any;
  public nearOEng: any;
  public contractEng: any;
  public saleYear: any;
  public saleAmt: any;
  public netWorthYear: any;
  public netWorthAmt: any;
  public highestLs: any;
  public highestHp: any;
  public contactTel: any;
  public addressEng2: any;
  public addCEng2: any;
  public addMEng2: any;
  public addOEng2: any;
  public highest: any;
  public nationalityCode: any;
  public establishDate: any;
  public branchNo: any;
  public busVatFlg: any;
  public mktBbpl: any;
  public currencyCode: any;
  public placeBilling: any;
  public placeCollect: any;
  public webSite: any;
  public chairman: any;
  public busDetail: any;
  public personCollectBilling: any;
  public clusterInd: any;
  public businessType: any;
  public confirmStatementFlg: any;
  public addressContCs: any;
  public prvCont: any;
  public titleEng: any;
  public titleThai: any;
  public cardTypeDesc: any;
  public grpName: any;
  public busTyDesc: any;
  public regisCapitalMb: any;
  public paidUpCapitalMb: any;
  public salesAmtMb: any;
  public netWorthAmtMb: any;
  public busDetailDesc: any;
  public zipDesc: any;
  public zipCDesc: any;
  public zipODesc: any;
  public zipMDesc: any;
  public nationality: Nationality[];
  public bank: Bank[];
  public card: Card[];
  public ind: Industry[];

  constructor()
  constructor(entCode: any,
              fNameE: any, // f_namee
              fNameT: any, // f_namet
              zip: any,
              contract: any,
              grpCode: any,
              address: any,
              salaryPerYear: any,
              indTy: any,
              occupa: any,
              tel: any,
              near: any,
              entTy: any,
              busTy: any,
              zipC: any,
              addC: any,
              zipO: any,
              addO: any,
              zipM: any,
              addM: any,
              comCode: any,
              lastUpd: any,
              lastUsr: any,
              ages: any,
              tNameT: any, // f_name
              statusM: any,
              mName: any,
              telO: any,
              nearO: any,
              posi: any,
              cardBy: any,
              locTy: any,
              birthD: any,
              inputDate: any,
              inputUser: any,
              tNameE: any, // f_name_e
              authorizeByT: any,
              authorizeByE: any,
              mobilePhone: any,
              lNameE: any,
              lNameT: any,
              cardNo: any,
              cardIssueDate: any,
              cardExpireDate: any,
              cardType: any,
              newCardNo: any,
              emailAddress: any,
              officeName: any,
              officeDepartment: any,
              sposAges: any,
              sposOccupa: any,
              sposPosi: any,
              sposSalary: any,
              sposOtherIncome: any,
              sposOfficeName: any,
              sposOfficeDepartment: any,
              sposCardNo: any,
              sposCardType: any,
              otherIncome: any,
              sposTel: any,
              telCard: any,
              postCd: any,
              postCdC: any,
              postCdO: any,
              postCdM: any,
              mobilePhone2: any,
              mobilePhone3: any,
              faxCurrent: any,
              faxOffice: any,
              sex: any,
              high: any,
              weigth: any,
              regisCapital: any,
              paidUpCapital: any,
              addressEng: any,
              nearEng: any,
              addCEng: any,
              addMEng: any,
              addOEng: any,
              nearOEng: any,
              contractEng: any,
              saleYear: any,
              saleAmt: any,
              netWorthYear: any,
              netWorthAmt: any,
              highestLs: any,
              highestHp: any,
              contactTel: any,
              addressEng2: any,
              addCEng2: any,
              addMEng2: any,
              addOEng2: any,
              highest: any,
              nationalityCode: any,
              establishDate: any,
              branchNo: any,
              busVatFlg: any,
              mktBbpl: any,
              currencyCode: any,
              placeBilling: any,
              placeCollect: any,
              webSite: any,
              chairman: any,
              busDetail: any,
              personCollectBilling: any,
              clusterInd: any,
              businessType: any,
              confirmStatementFlg: any,
              addressContCs: any,
              prvCont: any,
              titleEng: any,
              titleThai: any,
              cardTypeDesc: any,
              grpName: any,
              busTyDesc: any,
              regisCapitalMb: any,
              paidUpCapitalMb: any,
              salesAmtMb: any,
              netWorthAmtMb: any,
              busDetailDesc: any,
              zipDesc: any,
              zipCDesc: any,
              zipODesc: any,
              zipMDesc: any,
              nationality: Nationality[],
              bank: Bank[],
              card: Card[],
              ind: Industry[])
  constructor(entCode ?: any,
              fNameE ?: any, // f_namee
              fNameT ?: any, // f_namet
              zip ?: any,
              contract ?: any,
              grpCode ?: any,
              address ?: any,
              salaryPerYear ?: any,
              indTy ?: any,
              occupa ?: any,
              tel ?: any,
              near ?: any,
              entTy ?: any,
              busTy ?: any,
              zipC ?: any,
              addC ?: any,
              zipO ?: any,
              addO ?: any,
              zipM ?: any,
              addM ?: any,
              comCode ?: any,
              lastUpd ?: any,
              lastUsr ?: any,
              ages ?: any,
              tNameT ?: any, // f_name
              statusM ?: any,
              mName ?: any,
              telO ?: any,
              nearO ?: any,
              posi ?: any,
              cardBy ?: any,
              locTy ?: any,
              birthD ?: any,
              inputDate ?: any,
              inputUser ?: any,
              tNameE ?: any, // f_name_e
              authorizeByT ?: any,
              authorizeByE ?: any,
              mobilePhone ?: any,
              lNameE ?: any,
              lNameT ?: any,
              cardNo ?: any,
              cardIssueDate ?: any,
              cardExpireDate ?: any,
              cardType ?: any,
              newCardNo ?: any,
              emailAddress ?: any,
              officeName ?: any,
              officeDepartment ?: any,
              sposAges ?: any,
              sposOccupa ?: any,
              sposPosi ?: any,
              sposSalary ?: any,
              sposOtherIncome ?: any,
              sposOfficeName ?: any,
              sposOfficeDepartment ?: any,
              sposCardNo ?: any,
              sposCardType ?: any,
              otherIncome ?: any,
              sposTel ?: any,
              telCard ?: any,
              postCd ?: any,
              postCdC ?: any,
              postCdO ?: any,
              postCdM ?: any,
              mobilePhone2 ?: any,
              mobilePhone3 ?: any,
              faxCurrent ?: any,
              faxOffice ?: any,
              sex ?: any,
              high ?: any,
              weigth ?: any,
              regisCapital ?: any,
              paidUpCapital ?: any,
              addressEng ?: any,
              nearEng ?: any,
              addCEng ?: any,
              addMEng ?: any,
              addOEng ?: any,
              nearOEng ?: any,
              contractEng ?: any,
              saleYear ?: any,
              saleAmt ?: any,
              netWorthYear ?: any,
              netWorthAmt ?: any,
              highestLs ?: any,
              highestHp ?: any,
              contactTel ?: any,
              addressEng2 ?: any,
              addCEng2 ?: any,
              addMEng2 ?: any,
              addOEng2 ?: any,
              highest ?: any,
              nationalityCode ?: any,
              establishDate ?: any,
              branchNo ?: any,
              busVatFlg ?: any,
              mktBbpl ?: any,
              currencyCode ?: any,
              placeBilling ?: any,
              placeCollect ?: any,
              webSite ?: any,
              chairman ?: any,
              busDetail ?: any,
              personCollectBilling ?: any,
              clusterInd ?: any,
              businessType ?: any,
              confirmStatementFlg ?: any,
              addressContCs ?: any,
              prvCont ?: any,
              titleEng ?: any,
              titleThai ?: any,
              cardTypeDesc ?: any,
              grpName ?: any,
              busTyDesc ?: any,
              regisCapitalMb ?: any,
              paidUpCapitalMb ?: any,
              salesAmtMb ?: any,
              netWorthAmtMb ?: any,
              busDetailDesc ?: any,
              zipDesc ?: any,
              zipCDesc ?: any,
              zipODesc ?: any,
              zipMDesc ?: any,
              nationality ?: Nationality[],
              bank ?: Bank[],
              card ?: Card[],
              ind ?: Industry[]) {
    this.entCode = entCode;
    this.fNameE = fNameE;
    this.fNameT = fNameT;
    this.zip = zip;
    this.contract = contract;
    this.grpCode = grpCode;
    this.address = address;
    this.salaryPerYear = salaryPerYear;
    this.indTy = indTy;
    this.occupa = occupa;
    this.tel = tel;
    this.near = near;
    this.entTy = entTy;
    this.busTy = busTy;
    this.zipC = zipC;
    this.addC = addC;
    this.zipO = zipO;
    this.addO = addO;
    this.zipM = zipM;
    this.addM = addM;
    this.comCode = comCode;
    this.lastUpd = lastUpd;
    this.lastUsr = lastUsr;
    this.ages = ages;
    this.tNameT = tNameT; // f_name
    this.statusM = statusM;
    this.mName = mName;
    this.telO = telO;
    this.nearO = nearO;
    this.posi = posi;
    this.cardBy = cardBy;
    this.locTy = locTy;
    this.birthD = birthD;
    this.inputDate = inputDate;
    this.inputUser = inputUser;
    this.tNameE = tNameE; // f_name_e
    this.authorizeByT = authorizeByT;
    this.authorizeByE = authorizeByE;
    this.mobilePhone = mobilePhone;
    this.lNameE = lNameE;
    this.lNameT = lNameT;
    this.cardNo = cardNo;
    this.cardIssueDate = cardIssueDate;
    this.cardExpireDate = cardExpireDate;
    this.cardType = cardType;
    this.newCardNo = newCardNo;
    this.emailAddress = emailAddress;
    this.officeName = officeName;
    this.officeDepartment = officeDepartment;
    this.sposAges = sposAges;
    this.sposOccupa = sposOccupa;
    this.sposPosi = sposPosi;
    this.sposSalary = sposSalary;
    this.sposOtherIncome = sposOtherIncome;
    this.sposOfficeName = sposOfficeName;
    this.sposOfficeDepartment = sposOfficeDepartment;
    this.sposCardNo = sposCardNo;
    this.sposCardType = sposCardType;
    this.otherIncome = otherIncome;
    this.sposTel = sposTel;
    this.telCard = telCard;
    this.postCd = postCd;
    this.postCdC = postCdC;
    this.postCdO = postCdO;
    this.postCdM = postCdM;
    this.mobilePhone2 = mobilePhone2;
    this.mobilePhone3 = mobilePhone3;
    this.faxCurrent = faxCurrent;
    this.faxOffice = faxOffice;
    this.sex = sex;
    this.high = high;
    this.weigth = weigth;
    this.regisCapital = regisCapital;
    this.paidUpCapital = paidUpCapital;
    this.addressEng = addressEng;
    this.nearEng = nearEng;
    this.addCEng = addCEng;
    this.addMEng = addMEng;
    this.addOEng = addOEng;
    this.nearOEng = nearOEng;
    this.contractEng = contractEng;
    this.saleYear = saleYear;
    this.saleAmt = saleAmt;
    this.netWorthYear = netWorthYear;
    this.netWorthAmt = netWorthAmt;
    this.highestLs = highestLs;
    this.highestHp = highestHp;
    this.contactTel = contactTel;
    this.addressEng2 = addressEng2;
    this.addCEng2 = addCEng2;
    this.addMEng2 = addMEng2;
    this.addOEng2 = addOEng2;
    this.highest = highest;
    this.nationalityCode = nationalityCode;
    this.establishDate = establishDate;
    this.branchNo = branchNo;
    this.busVatFlg = busVatFlg;
    this.mktBbpl = mktBbpl;
    this.currencyCode = currencyCode;
    this.placeBilling = placeBilling;
    this.placeCollect = placeCollect;
    this.webSite = webSite;
    this.chairman = chairman;
    this.busDetail = busDetail;
    this.personCollectBilling = personCollectBilling;
    this.clusterInd = clusterInd;
    this.businessType = businessType;
    this.confirmStatementFlg = confirmStatementFlg;
    this.addressContCs = addressContCs;
    this.prvCont = prvCont;
    this.titleEng = titleEng;
    this.titleThai = titleThai;
    this.cardTypeDesc = cardTypeDesc;
    this.grpName = grpName;
    this.busTyDesc = busTyDesc;
    this.regisCapitalMb = regisCapitalMb;
    this.paidUpCapitalMb = paidUpCapitalMb;
    this.salesAmtMb = salesAmtMb;
    this.netWorthAmtMb = netWorthAmtMb;
    this.busDetailDesc = busDetailDesc;
    this.zipDesc = zipDesc;
    this.zipCDesc = zipCDesc;
    this.zipODesc = zipODesc;
    this.zipMDesc = zipMDesc;
    this.nationality = nationality;
    this.bank = bank;
    this.card = card;
    this.ind = ind;
  }

  static parse(json) {
    return new GetDataCustomer(
      json.ENT_CODE,
      json.F_NAMEE,
      json.F_NAMET,
      json.ZIP,
      json.CONTRACT,
      json.GRP_CODE,
      json.ADDRESS,
      json.SALARY_PER_YEAR,
      json.IND_TY,
      json.OCCUPA,
      json.TEL,
      json.NEAR,
      json.ENT_TY,
      json.BUS_TY,
      json.ZIP_C,
      json.ADD_C,
      json.ZIP_O,
      json.ADD_O,
      json.ZIP_M,
      json.ADD_M,
      json.COM_CODE,
      json.LAST_UPD,
      json.LAST_USR,
      json.AGES,
      json.F_NAME, // tNameT
      json.STATUS_M,
      json.MNAME,
      json.TEL_O,
      json.NEAR_O,
      json.POSI,
      json.CARD_BY,
      json.LOC_TY,
      json.BIRTH_D,
      json.INPUT_DATE,
      json.INPUT_USER,
      json.F_NAME_E, // tNameE
      json.AUTHORIZE_BY_T,
      json.AUTHORIZE_BY_E,
      json.MOBILE_PHONE,
      json.L_NAMEE,
      json.L_NAMET,
      json.CARD_NO,
      json.CARD_ISSUE_DATE,
      json.CARD_EXPIRE_DATE,
      json.CARD_TYPE,
      json.NEW_CARD_NO,
      json.EMAIL_ADDRESS,
      json.OFFICE_NAME,
      json.OFFICE_DEPARTMENT,
      json.SPOUS_AGES,
      json.SPOUS_OCCUP,
      json.SPOUS_POSI,
      json.SPOUS_SALARY,
      json.SPOUS_OTHER_INCOME,
      json.SPOUS_OFFICE_NAME,
      json.SPOUS_OFFICE_DEPARTMENT,
      json.SPOUSE_CARD_NO,
      json.SPOUSE_CARD_TYPE,
      json.OTHER_INCOME,
      json.SPOUS_TEL,
      json.TEL_CARD,
      json.POST_CD,
      json.POST_CD_C,
      json.POST_CD_O,
      json.POST_CD_M,
      json.MOBILE_PHONE2,
      json.MOBILE_PHONE3,
      json.FAX_CURRENT,
      json.FAX_OFFICE,
      json.SEX,
      json.HIGH,
      json.WEIGHT,
      json.REGIS_CAPITAL,
      json.PIAD_UP_CAPITAL,
      json.ADDRESS_ENG,
      json.NEAR_ENG,
      json.ADD_C_ENG,
      json.ADD_M_ENG,
      json.ADD_O_ENG,
      json.NEAR_O_ENG,
      json.CONTRACT_ENG,
      json.SALES_YEAR,
      json.SALES_AMT,
      json.NET_WORTH_YEAR,
      json.NET_WORTH_AMT,
      json.HIGHEST_LS,
      json.HIGHEST_HP,
      json.CONTACT_TEL,
      json.ADDRESS_ENG2,
      json.ADD_C_ENG2,
      json.ADD_M_ENG2,
      json.ADD_O_ENG2,
      json.HIGHEST,
      json.NATIONALITY_CODE,
      json.ESTABLISH_DATE,
      json.BRANCH_NO,
      json.BUS_VAT_FLG,
      json.MKT_BGPL,
      json.CURRENCY_CODE,
      json.PLACE_BILLING,
      json.PLACE_COLLECT,
      json.WEB_SITE,
      json.CHAIRMAN,
      json.BUS_DETAIL,
      json.PERSON_COLLECT_BILLING,
      json.CLUSTER_IND,
      json.BUSINESS_TYPE,
      json.CONFIRM_STATMENT_FLG,
      json.ADDRESS_CONT_CS,
      json.PRV_CONT,
      json.TITLE_ENG,
      json.TITLE_THI,
      json.CARD_TYPE_DESC,
      json.GRP_NAME,
      json.BUS_TY_DESC,
      json.REGIS_CAPITAL_MB,
      json.PAID_UP_CAPITAL_MB,
      json.SALES_AMT_MB,
      json.NET_WORTH_AMT_MB,
      json.BUS_DETAIL_DESC,
      json.ZIP_DESC,
      json.ZIP_C_DESC,
      json.ZIP_O_DESC,
      json.ZIP_M_DESC,
      Nationality.parse(json.NATIONALITY),
      Bank.parse(json.BANK),
      Card.parse(json.CARD),
      Industry.parse(json.IND)
    );
  }
}
