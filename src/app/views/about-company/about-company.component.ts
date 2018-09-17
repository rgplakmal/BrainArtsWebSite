import { Component, OnInit } from '@angular/core';
import { TestimonialData } from "../../configFiles/testimonials";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {

  testimonialList: any = [];
  testimonials;

  constructor() { }

  ngOnInit() {
    this.testimonials = TestimonialData.testimonialList;
    this.loadTestimonials();
    this.initJqueryFuctions();
  }


  private loadTestimonials() {
    this.testimonialList = TestimonialData.testimonialList;
  }

  initJqueryFuctions() {
    //testominols slider
    $(document).ready(function () {
      $('.testimonial').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }
}
