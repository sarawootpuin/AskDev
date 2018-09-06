import {Injectable} from "@angular/core";
import {DatePipe} from "@angular/common";

@Injectable()
export class DateUtils {

  constructor(private datePipe: DatePipe) {
  }

  private addMonths(date: Date, count: number): Date {
    if (date && count) {
      let m, d = (date = new Date(+date)).getDate();
      date.setMonth(date.getMonth() + count, 1);
      m = date.getMonth();
      date.setDate(d);
      if (date.getMonth() !== m) date.setDate(0);
    }
    return date;
  }

  addMonth(dateInput: any, count: number): any {
    if (dateInput && count) {
      var dateOutput;
      if (typeof(dateInput) === 'string' || dateInput instanceof String) {
        let dateParts = dateInput.split("/");
        let dateObject: Date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        dateOutput = this.dateToString(this.addMonths(dateObject, count), 'dd/MM/yyyy');
      }
      else if (dateInput.constructor.name === 'Date' && dateInput instanceof Date) {
        dateOutput = this.addMonths(dateInput, count);
      }
    }
    //console.log(dateOutput);
    return dateOutput;
  }

  dateToString(date: Date, format: string) {
    return this.datePipe.transform(date, format);
  }

  currentDate() {
    return new Date().toLocaleDateString('en-GB');
  }

  compareDate(dateInput1 : string, dateInput2 : string) : number{
    let result : number;
    let dateParts1 = dateInput1.split("/");
    let dateParts2 = dateInput2.split("/");
    let dateObject1 : number = new Date(+dateParts1[2], +dateParts1[1] - 1, +dateParts1[0]).valueOf();
    let dateObject2 : number = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]).valueOf();
    if(dateObject1 < dateObject2){
      result = -1; // less than
    } else if(dateObject1 === dateObject2){
      result = 0; // equal
    } else {
      result = 1; // more than
    }
    return result;
  }
  
  convertFormatDate(date : string) : string {
    const day = date.slice(0, 2)
    const month = date.slice(3, 5)
    const year = date.slice(6, 10)
    const newDate = year + month + day
    return newDate
  }
}
