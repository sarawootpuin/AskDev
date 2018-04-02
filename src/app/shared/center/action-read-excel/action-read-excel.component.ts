import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import * as XLSX from 'xlsx';
import 'rxjs';
import {Subscription} from "rxjs/Subscription";
import {HttpClient} from "@angular/common/http";
import {UserStorage} from "../../user/user.storage.service";
import {ReturnPart} from "./ReturnPart";
import {ServiceEndpoint} from "../../config/service-endpoint";


type AOA = Array<Array<any>>;

@Component({
  selector: 'app-action-read-excel',
  templateUrl: './action-read-excel.component.html',
  styleUrls: ['./action-read-excel.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ActionReadExcelComponent implements OnInit {

  modelReadExcel: any;
  public fileSelect: any = '';
  @Input('titleButton') titleButton = 'Browse File';
  @Input('useTabSheet') useTabSheet = false;
  @Input('showFileName') showFileName = true;
  @Input('caNo') caNo: any;
  @Input('comCode') comCode: any;
  @Output() onAfterOpen: EventEmitter<any> = new EventEmitter();


  valueManager: any;

  workBook: XLSX.WorkBook;
  nameManager: any[];
  selected: any;

  workSheet: any;
  cell1: any;
  cell2: any;
  tmpIndex: number;

  date: string;
  grade: string;
  point: string;

  data: any[] = [];
  dataExcel: any[] = [];
  tabSheet: string[] = [];
  subscription: Subscription[];

  part : ReturnPart;

  constructor(private http: HttpClient,
              private userStorage: UserStorage,
              private service : ServiceEndpoint) {
  }

  ngOnInit() {
    //this.onCheckFile();
  }

  onFindNameManager(nameManager: any) {

    this.workSheet = "";
    this.cell1 = "";
    this.cell2 = "";

    //console.log(nameManager);

    const findName = this.nameManager.filter(name => name.Name == nameManager);

    for (let name of findName) {
      this.tmpIndex = name.Ref.indexOf('!'); // Find Position Of ! //
      //console.log(this.tmpIndex);

      this.workSheet = name.Ref.slice(0, this.tmpIndex); // First Path Is Sheet Name //
      this.cell1 = name.Ref.slice(this.tmpIndex + 1); // Second Path Is Cell Position //

      this.tmpIndex = this.cell1.indexOf(':'); // Some Cell Position Has Range From : To //
      if (this.tmpIndex != -1) {
        this.cell2 = this.cell1.slice(this.tmpIndex + 1);
        this.cell1 = this.cell1.slice(0, this.tmpIndex - 1);
      }

      // console.log(this.workSheet);
      // console.log(this.cell1);
      // console.log(this.cell2);

      const ws: XLSX.WorkSheet = this.workBook.Sheets[this.workSheet];

      if (ws[this.cell1].w && ws) {
        //console.log(ws[this.cell1].w);
        return ws[this.cell1].w;
        // Note // If Found First Value //
        // Return And Get Out From Fucntion //
      }
    }

    console.log(findName);
    return "";
  }

  onSetWorkBook() {

    this.nameManager = this.workBook.Workbook.Names;
    // console.log(this.nameManager);

    if (this.nameManager) {
      if (this.nameManager.length > 0) {
        // Manage nameManager //
        for (let name of this.nameManager) {

          // String Replace //
          // string.replace( Regular Expression For Strint Whitch Want To Replace, "String Which Want To Use Replace") //
          // RegExp = Regular Expression Converter from String //
          name.Ref = name.Ref.replace(new RegExp("'", "g"), ""); // "" Replace To ' //
          // $ = Special Alphabet Can't Use RegExp //
          name.Ref = name.Ref.replace(/\$/g, ""); // "" Replace To $ //
        }
        // End Manage nameManager //

        if (this.fileSelect.slice(-4) == "xlsx") {
          this.grade = this.onFindNameManager("GRADE_L");
          this.point = this.onFindNameManager("POINT_L");
          // xlsx // get GRADE_L And POINT_L Only //
        }
        else {
          // xlsm // get GRADE_L, POINT_L And DATE Form Fix Cell //
          const ws: XLSX.WorkSheet = this.workBook.Sheets['Scoring'];
          this.date = new Date(ws['K2'].w).toLocaleDateString('en-GB');
          this.point = ws['K3'].w;
          this.grade = ws['K4'].w;

          if (this.date == 'Invalid Date') {
            this.date = ws['K2'].w;
          }
        }

        console.log("Finish");
        // console.log(this.date);
        // console.log(this.point);
        // console.log(this.grade);

        this.valueManager = {
          "date": this.date,
          "point": this.point,
          "grade": this.grade
        };

        // const ws: XLSX.WorkSheet = this.workBook.Sheets['Scoring'];
        // ws['!ref'] = "K2:K4";
        //
        // console.log(XLSX.utils.decode_range(ws['!ref']));
        // console.log(ws['K2:K4']);
      }
    }
    this.onAfterOpenFile();

  }

  getmodelReadExcel() {
    return this.modelReadExcel;
  }

  getPointGrade() {
    return this.valueManager;
  }

  getNameManager() {
    return this.nameManager;
  }

  setmodelReadExcel(val: any) {
    this.modelReadExcel = val;
  }

  onAfterOpenFile() {
    this.onAfterOpen.emit();
  }

  countColumn(sheet: any[]) {
    let max = 0;
    for (let i = 0; i < sheet.length; i++) {
      if (max < sheet[i].length) {
        max = sheet[i].length;
      }
    }
    return max;
  }

  onTabSheet(sheet: any) {
    //  var txt1= "<div style='height: 300px;' id='grid'></div>";
    //  $("canvas-datagrid").remove();
    //  $('canvas').remove();
    //  $("div#grid").remove();
    //  $("div#dataExcel").append(txt1);
    //
    // //  console.log(sheet);
    //  var datagrid = this.data[sheet];
    // // // console.log(datagrid);
    //  var grid;
    //  if( document.getElementById('grid'+sheet))
    //  {
    //    console.log('found');
    //  }
    //
    //
    //  for(let loopSheet=0;loopSheet<this.data.length;loopSheet++)
    //  {
    //
    //    $("canvas-datagrid").remove();
    //    $("canvas").remove();
    //
    //    $("div#grid"+loopSheet).empty();
    //    $("canvas-datagrid").empty();
    //    $("canvas").empty();
    //    // window.removeEventListener("click", function () {
    //    //   var parentNode = document.getElementById('grid'+loopSheet);
    //    //   grid = canvasDatagrid({
    //    //     parentNode: parentNode,
    //    //     data: null
    //    //   });
    //    // });
    //  }
    //

  }

  onLoadFile(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      // const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      this.workBook = XLSX.read(bstr, {type: 'binary'});

      /* read sheet excel */
      for (let i = 0; i < this.workBook.SheetNames.length; i++) {
        const wsname: string = this.workBook.SheetNames[i];// wb.SheetNames[i];
        this.tabSheet.push(wsname);
        const ws: XLSX.WorkSheet = this.workBook.Sheets[wsname]; //wb.Sheets[wsname];

        //console.log(ws);

        /* save data */
        this.data.push(<AOA>(XLSX.utils.sheet_to_json(ws, {header: 1})));
      }

      this.dataExcel = this.data;

      //  console.log(this.data);

      // Call For Set nameManager & Find Date, Grade And Point //
      this.onSetWorkBook();

    };
    reader.readAsBinaryString(target.files[0]);
    return this.data;
  }

  onCheckFile() {

    this.findCaDirectoryPart(this.comCode, this.caNo).subscribe(
      (data: any) => {
        console.log(data);
        if (data.MSG == "Complete") {
         this.part = ReturnPart.parse(data.DATA);
        }
      }
    );
  }

  onFileChange(evt: any) {

    this.fileSelect = evt.target.files[0].name;
    //console.log(this.fileSelect);
    this.setmodelReadExcel(this.onLoadFile(evt));

    let part = new ReturnPart();

    this.getCaDirectoryPart().subscribe(
      (data: any) => {
        console.log(data);
        if (data.MSG == "Complete") {
          part = ReturnPart.parse(data.DATA);

          console.log("Upload File");
          this.onUpload(evt.target.files[0], part.part).subscribe(
            (data: any) => {
              console.log(data);
              this.selected = data.fileName;
              this.fileSelect = this.selected;
            }, error => {
              console.log(error);
            }
          );
        }
      }, error => {
        console.log(error);
      }
    );

    console.log(evt.target.files[0]);
    /* wire up file reader */
    // var datagrid = this.onLoadFile(evt);
    // var grid;
    //
    // for(let i=0;i<this.dataExcel.length;i++)
    // {
    //   console.log('t');
    //   window.addEventListener('change', function () {
    //     var parentNode = document.getElementById('grid'+i);
    //     grid = canvasDatagrid({
    //       parentNode: parentNode,
    //       data: datagrid
    //     });
    //   });
    // }

  }

  onUpload(fileToUpload: File, part: string) {

    const url = `http://172.16.1.112/uploadFileCa.php`;
    const formData: FormData = new FormData();
    formData.append('uploadFile', fileToUpload, fileToUpload.name);
    formData.append('caNo', this.caNo);
    formData.append('part', part);
    let options = {
      headers: {
        'Content-Type': 'charset=utf-8'
      }
    };

    console.log('onUpload');

    // return this.http
    //   .post(url, formData)
    //   .map((data:any) => data)
    //   .catch((e) => {  console.log(e.error);    return e.error});

    return this.http.post(url, formData);
  }

  getCaDirectoryPart() {

    const url = this.service.url + this.service.appform_api +  `/ask/common/GetCaDirectoryPart`;
    //`http://javadev01:8095/AppForm_WebServices/ask/common/GetCaDirectoryPart`;
    const data =
      {
        "device": "web",
        "userCode": this.userStorage.getCode(),
        "comCode": this.comCode
      };

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    console.log('Get Directory Part');

    return this.http.post(url, data, options);
  }


  findCaDirectoryPart(comCode,caNo) {
    // console.log(this.comCode)
    // console.log(this.caNo)
    const url = this.service.url + this.service.appform_api + `/ask/common/FindCaDirectoryPart`;
    //const url = `http://localhost:8080/AppForm_WebServices/ask/common/FindCaDirectoryPart`;
    const data =
      {
        "device": "web",
        "userCode": this.userStorage.getCode(),
        "comCode": comCode,
        "caNo" : caNo
      };

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log('Find File In Directory Part');

    return this.http.post(url, data, options);
  }

}
