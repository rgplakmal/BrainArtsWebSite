import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.initJqueryFuctions();
    this.company_animation();
  }

  initJqueryFuctions() {
    $(document).ready(function () {
      $(".testimonial-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next")
      });
    });
  }

  company_animation(){
    $(window).scroll(function() {

      // section2 Animation
      var hT = $('#who-we-are').offset().top,
        hH = $('#who-we-are').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.who-we-are').addClass('animated zoomInDown');
      }else {
        $('.who-we-are').removeClass('animated zoomInDown');
      }

      // section3 Animation
      var hT = $('#section-3').offset().top,
        hH = $('#section-3').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.section-3').addClass('animated pulse');
      }else {
        $('.section-3').removeClass('animated pulse');
      }

      // section4 Animation
      var hT = $('#section-4').offset().top,
        hH = $('#section-4').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.section-4').addClass('animated pulse');
      }else {
        $('.section-4').removeClass('animated pulse');
      }

      // section5 Animation
      var hT = $('#section-5').offset().top,
        hH = $('#section-5').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.section-5').addClass('animated pulse');
      }else {
        $('.section-5').removeClass('animated pulse');
      }

      // testimonials section Animation
      var hT = $('#testimonial').offset().top,
        hH = $('#testimonial').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if (wS > (hT+hH-wH)){
        $('.testimonial').addClass('animated pulse');
      }else {
        $('.testimonial').removeClass('animated pulse');
      }

    });
  }
}
