import React,{Component} from 'react';
import TitlebarGridList from './productGrid'
import ImageSlider from './imageSlider';
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            products:[],
        }
    }
    componentDidMount(){
        fetch('https://app.banner20.hasura-app.io/getproducts')
        .then((data) => {
          return data.json()
        })
        .then((json) => {
          this.setState({ products: json.data })
        })
    }
    render(){
        return (
            <div>
            <h1>Home</h1>
              <div classess='contianer'>
                <ImageSlider/>
              </div>
              <br/>
              <TitlebarGridList/>
              {this.state.products}
            </div>         
 
        )
    }
} 