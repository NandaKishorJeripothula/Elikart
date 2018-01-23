import React, { Component } from 'react';
import Slider from 'react-image-slider';
import '../App.css';
 
export default class Slider3 extends Component{
  render() {
    const images = [
      './Images/virat.jpg',
      './Images/HasuraChristmas.jpg.jpg',
      './Images/virat.jpg',
      './Images/HasuraChristmas.jpg.jpg',
      './Images/virat.jpg',
      './Images/HasuraChristmas.jpg',
      
    ];
 
    return (
      <Slider images={images} isInfinite delay={5000}>
        {images.map((image, key) => <div key={key}><img src={image} /></div>)}
      </Slider>
    );
  }
}; 