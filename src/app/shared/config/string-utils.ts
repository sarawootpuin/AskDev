import {Injectable} from "@angular/core";

@Injectable()
export class StringUtils {

  public TitleDialog = new class {
    public SAVE:string = 'Do you want to save?';
    public SUBMIT:string = 'Do you want to submit?';
    public REJECT:string = 'Do you want to reject?';
    public DELETE:string = 'Do you want to delete?';
    public CANCEL:string = 'Do you want to cancel?';
    public PRINT:string = 'Do you want to print?';
    public ADD:string = 'Do you want to add?';
    public EDIT:string = 'Do you want to edit?';
    public PROCESS:string = 'Do you want to process?';
    public RETURN:string = 'Do you want to return?';
    public EXIT:string = 'Do you want to exit?';
  }
}
