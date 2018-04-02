import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html'
})
export class BlacklistComponent implements OnInit {
  location : string;
  constructor(router:Router) {
     this.location = router.url;

  }
  items: MenuItem[];

  ngOnInit() {

    this.items = [
      {
        label: 'Black List Data', icon: 'fa-check',
        items: [
          [
            {
              label: 'Black List Data',
             // url:'apply'
               items: [{label: 'A1 : Apply New Blacklist',routerLink:'apply'},
                       {label: 'A2 : Blacklist Checking',routerLink:'search'},
                       {label: 'A4 : Search AMLO (ปปง.)',routerLink:'amlo'}
                       ]
            }
          ]
        ]
      },
      {
        label: 'Exposure', icon: 'fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Exposure',
              // url:'apply'
              items: [{label: 'E1 : Exposure Inquiry',routerLink:'blacklist-exposureinquiry'},
                {label: 'E2 : Exposure Report',routerLink:'blacklist-exposurereport'}
              ]
            }
          ]
        ]
      },
      {
        label: 'Contact Customer',
        items: [
          [
            {
              label: 'Contact Customer',
              // url:'apply'
              items: [{label: 'Contact Customer'}
              ]
            }
          ]
        ]
      },
      {
        label: 'NCB', icon: 'fa-child',
        items: [
          [
            {
              label: 'Entertainment 1',
              items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
            },
            {
              label: 'Entertainment 2',
              items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
            }
          ],
          [
            {
              label: 'Entertainment 3',
              items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
            },
            {
              label: 'Entertainment 4',
              items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'NCRs', icon: 'fa-gears',
        items: [
          [
            {
              label: 'Technology 1',
              items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
            },
            {
              label: 'Technology 2',
              items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
            },
            {
              label: 'Technology 3',
              items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{label: 'Technology 4.1'},{label: 'Technology 4.2'}]
            }
          ]
        ]
      }
    ];
  }


}
