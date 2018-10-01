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
    this.home_animation();
    this.clients_slider();
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

  // @HostListener('window:scroll')
  //  onScroll() {
  //   if($(window).scrollTop() >= 1000){
  //     $('.project-animation1').addClass('animated bounceInLeft');
  //      const element = document.querySelector("#project-animation1");
  //      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  //   } else {
  //     $('.project-animation1').removeClass('animated bounceInLeft');
  //   }
  // }

  home_animation(){
    $(window).scroll(function() {

      // Main-divs Section Animation
      var hT = $('#main-img').offset().top,
        hH = $('#main-img').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.main-img').addClass('animated pulse');
      }else {
        $('.main-img').removeClass('animated pulse');
      }

      // Hello-User Section Animation
      var hT = $('#hello_user').offset().top,
        hH = $('#hello_user').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.hello_user').addClass('animated pulse');
      }else {
        $('.hello_user').removeClass('animated pulse');
      }

      // Client Section Animation
      var hT = $('#clients').offset().top,
        hH = $('#clients').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.clients').addClass('animated pulse');
      }else {
        $('.clients').removeClass('animated pulse');
      }

      // project1 Section Animation
      var hT = $('#project-animation1').offset().top,
        hH = $('#project-animation1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.project-animation1').addClass('animated pulse');
      }else {
        $('.project-animation1').removeClass('animated pulse');
      }
    });
  }

  clients_slider(){
    $(document).ready(function(){
      $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }]
      });
    });
  }

}
