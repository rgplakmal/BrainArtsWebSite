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
}
