import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserStorage} from "../../user/user.storage.service";
import {ModelImage} from "./model/modelImage";
import {ServiceEndpoint} from "../../config/service-endpoint";
/**
 * Created by patcharapon.ch on 25/01/2561.
 */
@Injectable()
export class ImageServices{

  modelImage:ModelImage[]=[];
  constructor(private http:HttpClient,
              private userStorage:UserStorage,
              private service: ServiceEndpoint)
  {

  }

  setModelImage(obj:ModelImage[])
  {
    this.modelImage = obj;
  }

  getModelImage(){
    return this.modelImage;
  }

  getImage(url?:string) {
    //const url = `javadev01:8095/blacklist_test/ask/blacklist/GetNCBImage?device=com&userlogin=sunan.vi`;
   // const url = this._url+this._img_api+`/ask/image/GetNCBImage?device=web&userlogin=`+this.userStorage.getUserName()+param;
    //let ExposureJson = {"pcode":pcode,"userlogin":this.userStorage.getUserName()};
    //console.log(url);
    const  severGetImage = '&server='+this.service.url_img.replace('http://','');
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url+severGetImage);
    return this.http.get(url+severGetImage, options);
    // return this.http.post(url,JSON.stringify(ExposureJson) ,options);
  }

}

