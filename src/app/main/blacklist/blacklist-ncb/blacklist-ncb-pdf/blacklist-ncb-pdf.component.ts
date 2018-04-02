import { Component, OnInit } from '@angular/core';
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {ModelNcbPdf} from "./model/modelNcbPdf";

@Component({
  selector: 'app-blacklist-ncb-pdf',
  templateUrl: './blacklist-ncb-pdf.component.html'
})
export class BlacklistNcbPdfComponent implements OnInit {

  constructor(private blacklistNcbService:BlacklistNcbService) { }

  modelNcbPdf:ModelNcbPdf[]=[];
  totalPDF:number =0;

  ngOnInit() {
      this.showListPDF();
  }

  showListPDF()
  {

    this.modelNcbPdf = this.blacklistNcbService.getModelNcbPdf();
  //  this.modelNcbPdf.push(new ModelNcbPdf('1','test','test','http://localhost:8080/pdf/test.pdf','test'));
    console.log(this.modelNcbPdf);
    this.totalPDF = this.modelNcbPdf.length;
  }
}
