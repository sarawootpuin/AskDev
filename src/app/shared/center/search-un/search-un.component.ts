import {
  Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {searchobj} from "./search-un-model/searchobj";
import {SearchUnservice} from "./SearchUn.service";
import {columnobj} from "./search-un-model/columnobj";
import {ActionDialogComponent} from "../action-dialog/action-dialog.component";
import {Subscription} from "rxjs/Subscription";
import {assertNumber} from "@angular/core/src/render3/assert";

@Component({
  selector: 'app-search-un',
  templateUrl: './search-un.component.html',
  styleUrls: ['./search-un.component.css'],
  providers : [SearchUnservice]
})
export class SearchUnComponent implements OnInit, OnChanges ,OnDestroy {

  private subParams: Subscription;
  private subscription: Subscription;

  @Input()  inuURL: string;
  @Input()  callApiOnShow: boolean = true;
  @Input()  title: string[];
  @Input('option') private option : string;    ///  option for button
  @Input('searchParamName') private searchParamName : string;    ///   For search  param in URL(of Service)
  @Input('iconOnly') private iconOnly : boolean = true;      ////   show  icon
  @Input('displaytext') private displaytext : string;
  @Input('displaycol') private displaycol : string;
  @Input('widthcol') private widthcol : string;
  @Input('width') private width : number = 700;


  @ViewChild('searchdialog') searchdialog: ActionDialogComponent;

  defaultText: string = "";

  setColum: columnobj[];

  thiscol1: string;
  thiscol2: string;
  thiscol3: string;
  thiscol4: string;
  thiscol5: string;

  thissearchUnText : string = '' ;

  @Output() col1: EventEmitter<string> = new EventEmitter<string>();
  @Output() col2: EventEmitter<string> = new EventEmitter<string>();
  @Output() col3: EventEmitter<string> = new EventEmitter<string>();
  @Output() col4: EventEmitter<string> = new EventEmitter<string>();
  @Output() col5: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();


  Listselect: searchobj[] = [new searchobj("", "", "", "", "")];

  SelectRow: searchobj;

  btnChoose : boolean = false ;

  constructor(private pService: SearchUnservice) {
     this.option = 'search' ;
     this.searchParamName = '' ;
     this.displaytext = '' ;
     this.displaycol = '' ;
     this.width = 700;

  }

  ngOnInit() {
    this.setUpColumn(this.title);
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    console.log('Destroy Search Un');
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  showDialog() {
    this.btnChoose = false ;
    this.searchdialog.setTitle('Search');
    this.searchdialog.open();
    this.defaultText = "";
    this.Listselect=[];
    if (this.callApiOnShow) {                 ////   Call API ON Show Dialog
      this.subscription = this.pService.getListSelect(this.inuURL).subscribe(
          (data: any) => {
            this.Listselect = searchobj.parse(data.LIST_DATA);
          }
        );
    }
  }

  searchAPI(){
    //console.log(this.searchParamName);
    //console.log(this.thissearchUnText);
    if (( this.searchParamName ) && ( this.thissearchUnText) ) {
      let tempURL = this.inuURL ;
      let paramSearch = this.searchParamName ;
      let indexStr = tempURL.indexOf(paramSearch);

      if (indexStr){                  /////   Find searchParamName
          let strOldReplace = '' ;
          for(let i =indexStr;i< tempURL.length ; i++ )
          {
            if ( tempURL[i] == '&' ) { break; }

            strOldReplace += tempURL[i];
          }
          let afSplit = tempURL.split(strOldReplace);

          let newStr = '' ;
          if (afSplit.length < 2){
            newStr = afSplit[0] + '&' + paramSearch  + '=' + this.thissearchUnText ;
          }
          else {
            newStr = afSplit[0] + paramSearch + '=' + this.thissearchUnText + afSplit[1] ;
          }
          //console.log(newStr);

          this.Listselect=[];
        this.subscription =  this.pService.getListSelect(newStr).subscribe(
          (data: any) => {
            this.Listselect = searchobj.parse(data.LIST_DATA);
           }
          );

      }

    }
  }

  setUpColumn(title: string[]) {
    //////  Set Title of column
    this.setColum = [];
    let tempi: number = 0;
    let tempstr: string = '';
    for (let i = 0; i <= title.length; i++) {

      if (title[i] == ';') {
        tempi = tempi + 1;
        this.setColum.push(new columnobj(tempstr, 'col' + tempi.toString()));
        tempstr = '';
      } else {
        tempstr = tempstr + title[i];
      }
    }

    //////  Set width of column
    if ( (this.widthcol) &&  (this.widthcol.length > 0 ) ){

      let afSplit = this.widthcol.split(';');
      if ((afSplit) && (afSplit.length > 0 )) {
        for(let i = 0 ; i < this.setColum.length ; i++ ){
           if (afSplit[i]){
             this.setColum[i].widthcol  =  afSplit[i] ;
           }else {
             this.setColum[i].widthcol  =  ( (this.width - 100 )  / this.setColum.length ).toString() ;
           };
           console.log(this.setColum[i].widthcol + 'px' );
        }
      }
    }


  }

  onChoose(click: searchobj) {

    this.thiscol1 = click.col1;
    this.thiscol2 = click.col2;
    this.thiscol3 = click.col3;
    this.thiscol4 = click.col4;
    this.thiscol5 = click.col5;
    this.btnChoose = true ;
  }

  onSubmit() {
    this.col1.emit(this.thiscol1);
    this.col2.emit(this.thiscol2);
    this.col3.emit(this.thiscol3);
    this.col4.emit(this.thiscol4);
    this.col5.emit(this.thiscol5);
    if (this.displaycol){
        this.displayCol(this.displaycol);
    }
  }

  setCallApiOnShow(value : boolean){
       this.callApiOnShow = value ;
  }

  setDisplaycol( col : string ){
    this.displaycol = col ;
  }

  displayCol(col : string){
    let incol = col.toUpperCase();
    if (incol == 'COL1'){
      this.displaytext = this.thiscol1 ;
    }else if (incol == 'COL2'){
      this.displaytext = this.thiscol2 ;
    }else if (incol == 'COL3'){
      this.displaytext = this.thiscol3 ;
    }else if (incol == 'COL4'){
      this.displaytext = this.thiscol4 ;
    }else if (incol == 'COL5'){
      this.displaytext = this.thiscol5 ;
    }else {
      this.displaytext = '';
    }
  }

}
