import React,{Component} from 'react';
import { green} from 'material-ui/colors/green'
import { blue } from 'material-ui/colors/blue'
import { red } from 'material-ui/colors/red' 
import TitlebarGridList from './productGrid'
import ImageSlider from './imageSlider';
export default class Home extends Component{
    render(){
        return (
            <div>
            <h1>Home</h1>
              <div classess='contianer'>
                <ImageSlider/>
              </div>
              <br/>
              <TitlebarGridList/>
            </div>         
 
        )
    }
} 