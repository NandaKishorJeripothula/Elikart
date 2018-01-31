import React,{Component} from 'react';
import Slider from 'react-slick';
export default class ImageSlider extends Component{
    render() {
        var settings = {
          dots: true,
          arrows:true,
          infinite: true,
          speed: 1000,
          autoplay: true,
          adaptiveHeight:true,
          adativeHeight:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        };
        return (
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
        );
      }
}