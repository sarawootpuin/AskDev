import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router,
  RoutesRecognized
} from "@angular/router";
import {UserStorage} from "../../shared/user/user.storage.service";
import {MainService} from "../main.service";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/Rx';
import {UserGroupMenu} from "../../shared/user/user-mainmenu";
import {TodoService} from "../home/todo/todo.service";
//declare var $: any;
import * as $ from 'jquery';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy,OnChanges,AfterViewInit {
  subscription: Subscription;
  listGroupMenu: UserGroupMenu[] = [];
  userName: string = '';
  code: string = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private mainService: MainService,
              private todoService: TodoService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();
    this.subscription = this.mainService.getMenu("web", this.code).subscribe(
      (data: any) => {
        for (let i = 0; i < data.LIST_MENU.length; i++) {
          this.listGroupMenu.push(UserGroupMenu.parse(JSON.stringify(data.LIST_MENU[i])));
        }

      },
      (error: any) => {
      }
    );
    this.onHideNav();
  }

  ngAfterViewInit()
  {
    this.onHideNav();
  }

  ngOnChanges()
  {
    this.onHideNav();
  }

  onHideNav()
  {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();


    $(window).scroll(function(event){
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
      else{

        if($(document).height() <= $(window).height())
        {
          var  st = $(window).scrollTop();
          $('div#actionbutton').removeClass('div-top root d-flex w-100 p-2 ').addClass('div-down root d-flex w-100 p-2 ');
          $('div#actionbutton').css({"top":"","position":""});
          $('nav').removeClass('navbar-hide navbar-expand-sm fixed-top navbar-dark').addClass('navbar navbar-expand-sm fixed-top navbar-dark');
        }

      }
    }, 5);

    function hasScrolled() {

      var st = $(window).scrollTop();
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        if(st>=70) {
          $('div#actionbutton').removeClass('div-down root d-flex w-100 p-2 ').addClass('div-top root d-flex w-100 p-2');
          $('div#actionbutton').css({"top":"0px"});
        }
        $('nav').removeClass('navbar navbar-expand-sm fixed-top navbar-dark').addClass('navbar-hide navbar-expand-sm fixed-top navbar-dark');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          if(st>=70)
          {
            $('div#actionbutton').removeClass('div-top root d-flex w-100 p-2 ').addClass('div-down root d-flex w-100 p-2 ');
            $('div#actionbutton').css({"top":"70px","position":"fixed","z-index":"1029"});
          }
          else
          {
            $('div#actionbutton').removeClass('div-top root d-flex w-100 p-2 ').addClass('div-down root d-flex w-100 p-2 ');
            $('div#actionbutton').css({"top":"","position":""});
          }

          $('nav').removeClass('navbar-hide navbar-expand-sm fixed-top navbar-dark').addClass('navbar navbar-expand-sm fixed-top navbar-dark');
        }
      }

      lastScrollTop = st;
    }
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  navigate(menuCodeSelect: string) {
    if (menuCodeSelect == "MSM-01") {
      this.router.navigate(['/SaleCall'],{
        relativeTo: this.route,
        queryParams: {
          task: "Apply"
        }
      });
    } else if (menuCodeSelect == "MSM-04") {
      this.router.navigate(['/SaleCall/inQuery']);
    } else if (menuCodeSelect == "MSM-07") {
      this.router.navigate(['/reassign']);
    } else if (menuCodeSelect == "AP-01") {
      this.router.navigate(['/appform'], {
        relativeTo: this.route,
        queryParams: {
          type: "New"
        }
      });
    } else if (menuCodeSelect == "AP-01-2") {
        this.router.navigate(['/appform'], {
          relativeTo: this.route,
          queryParams: {
            type: "Renew"
          }
        });
    } else if (menuCodeSelect == "ICD1") {
      this.router.navigate(['/IncompleteDoc/ICDApply']);
    } else if (menuCodeSelect == "ICD2") {
      this.router.navigate(['/IncompleteDoc/ICDQuery']);
    } else if (menuCodeSelect == "ICD3") {
      this.router.navigate(['/IncompleteDoc/ICDReport']);
    } else if (menuCodeSelect == "ICD4") {
      this.router.navigate(['/IncompleteDoc/ICDMonthlyReport']);
    } else if (menuCodeSelect == "A1") {
      this.router.navigate(['/blacklist/apply']);
    } else if (menuCodeSelect == "A2") {
      this.router.navigate(['/blacklist/search']);
    } else if (menuCodeSelect == "A4") {
      this.router.navigate(['/blacklist/amlo']);
    } else if (menuCodeSelect == "E1") {
      this.router.navigate(['/blacklist/blacklist-exposureinquiry']);
    } else if (menuCodeSelect == "E2") {
      this.router.navigate(['/blacklist/blacklist-exposurereport']);
    } else if (menuCodeSelect == "N1") {
      this.router.navigate(['/blacklist/ncb']);
    } else if (menuCodeSelect == "N2") {
      this.router.navigate(['/blacklist/ncb-enquiry']);
    } else if (menuCodeSelect == "SCRMKT") {
      this.router.navigate(['/scoring/change-mkt-name']);
    } else if (menuCodeSelect == "SCRDEP") {
      this.router.navigate(['/scoring/change-department']);
    } else if (menuCodeSelect == "SCREN1") {
      this.router.navigate(['/scoring/enquiry']);
    } else if (menuCodeSelect == "SCRRTN1") {
      this.router.navigate(['/scoring/reverify']);
    }



  }

  logout() {
    this.router.navigate(['/authen/signin']).then(() => {
      //window.location.reload()
    });
  }

}
