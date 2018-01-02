import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import '../App.css';

import Appbar  from './Appbar';
import Searchbar from './Searchbar';
import Postbar1  from './Postbar1';

import Card1  from './Card1';
import Profilesection from './Profilesection';

import WhoToFollow from './WhoToFollow';
import Trends from './Trends';
import PostSection from './PostSection';
import PageChip from './PageChip';


class SuperComponent1 extends Component {
 render() {
   return (
     <MuiThemeProvider>
     <div className="App">

      <Appbar/>


       <Profilesection/>


        <Trends/>
      <Postbar1/>  <Card1/>

     <WhoToFollow/>
<PageChip/>














     </div>
     </MuiThemeProvider>
           );
         }
       }
 /* const app=document.getElementById('root')
ReactDom.render(<Layout/>,app);
*/
export default SuperComponent1;
