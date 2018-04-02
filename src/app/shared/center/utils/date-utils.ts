import {Injectable} from "@angular/core";
import {DatePipe} from "@angular/common";

@Injectable()
export class DateUtils {

  constructor(private datePipe : DatePipe) {
  }

  addMonth(date: Date, count: number): Date {
    if (date && count) {
      let m, d = (date = new Date(+date)).getDate();
      date.setMonth(date.getMonth() + count, 1);
      m = date.getMonth();
      date.setDate(d);
      if (date.getMonth() !== m) date.setDate(0);
    }
    return date;
  }

  stringToDate(dateStr: string): Date {
    return new Date(dateStr);
  }

  dateToString(date: Date, format : string) {
    return this.datePipe.transform(date, format);
  }
}
