import {Component, OnDestroy, OnInit} from "@angular/core";
import {GetDataCustomer} from "../../model/getDataCustomer";
import {AppFormService} from "../../appform.service";
import {Card} from "../../model/card";
import {Bank} from "../../model/bank";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html'
})
export class BankCardComponent implements OnInit,OnDestroy {
  data: GetDataCustomer;
  cardTable: Card[] = [];
  selectedCard: Card = new Card();

  bankTable: Bank[] = [];
  selectedBank: Bank = new Bank();
  subscription : Subscription;
  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.subscription = this.appFormService.eventTabCustomer.subscribe(
      (json: any) => {
        //console.log(json);
        this.data = json;
        this.cardTable = this.data.card;
        //console.log(this.cardTable);
        if (this.cardTable) {
          if (this.cardTable.length > 0) {
            this.selectedCard = this.cardTable[0];
          }
        }

        this.bankTable = this.data.bank;
        if (this.bankTable) {
          if (this.bankTable.length > 0) {
            this.selectedBank = this.bankTable[0];
          }
        }
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  selectCard(event) {
    this.selectedCard = event.data;
  }

  selectBank(event) {
    this.selectedBank = event.data;
  }
}
