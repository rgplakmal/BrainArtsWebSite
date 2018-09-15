import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// declare var jquery:any;
// declare var $: any;
// declare var wow: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor ( private router: Router) {
    // this.wowService.init();
  }

  ngOnInit() {
    // new WOW().init();
    // this.wowAnimationStart();

// this.jqueryTest();
  }



  AiMlDlButtonClick() {
    // alert("AI ML DL");
    this.router.navigateByUrl("/ai-ml-dl");
  }

  gameDevButtonClick() {
    this.router.navigateByUrl("/game-development");
  }

  digiMarketingButtonClick() {
    this.router.navigateByUrl("/digital-marketing");
  }

  swDevButtonClick() {
    this.router.navigateByUrl("/sw-development");
  }

  mobileDevButtonClick(){
    this.router.navigateByUrl("/mobileDev");
  }

  //
  // jqueryTest()
  // {
  //   alert("jQuery test");
  // }

  // wowAnimationStart(){
  //   $(document).ready(function(){
  //     new WOW().init();
  //   });
  // }
}
