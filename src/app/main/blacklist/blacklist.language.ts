import {Injectable} from "@angular/core";
/**
 * Created by patcharapon.ch on 29/01/2561.
 */
@Injectable()
export class BlacklistLanguage {

  applyBlacklistComponent = {
    "th": {
      "prefix": "คำนำหน้า",
      "amlo": "ข้อมูล ปปง.",
      "name":"ชื่อบุคคล/นิติบุคคล",
      "language": "TH"
    },
    "en": {
      "prefix": "Prefix",
      "amlo": "Amlo",
      "name":"Name of person / juristic person",
      "language": "EN"
    },
    "default":{
      "language": "EN"
    }
  }

}

