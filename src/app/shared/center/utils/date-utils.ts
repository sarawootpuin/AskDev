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
    console.log(dateOutput);
    return dateOutput;
  }

  dateToString(date: Date, format: string) {
    return this.datePipe.transform(date, format);
  }
}
