import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HostListener} from "@angular/core";

// declare var jquery:any;
declare var $: any;
// declare var wow: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor ( private router: Router) {
  }

  ngOnInit() {
    // this.aaaa();
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

  @HostListener('window:scroll')
  // onScroll(event) {
  //   if($(window).scrollTop() >= 1000){
  //     $('.btn').addClass('animated wobble');
  //     const element = document.querySelector("#packages");
  //     element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  //   } else {
  //     $('.btn').removeClass('animated wobble');
  //   }
  // }

  onScroll() {
    if($(window).scrollTop() >= 1000){
      $('.project-animation1').addClass('animated bounceInLeft');
      const element = document.querySelector("#project-animation1");
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    } else {
      $('.project-animation1').removeClass('animated bounceInLeft');
    }
  }

}
