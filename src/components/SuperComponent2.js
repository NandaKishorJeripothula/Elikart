import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Projects from './Projects' ;
import IconButton from 'material-ui/IconButton';
import '../App2.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


 import Appbar  from './Appbar';
 import Postbar1  from './Postbar1';

import Card2  from './Card2';
import Profilesection from './Profilesection';
import WhoToFollow2 from './WhoToFollow2';
import Trends from './Trends';
import PostSection from './PostSection';
import Searchbar from './Searchbar';
import PageChip from './PageChip';
import AadharDiv from './AadharDiv';
import Toolbar2 from './Toolbar2';
import RelatedSearch from './RelatedSearch';
import SearchFilters from './SearchFilters';
import TopNewsCard2 from './TopNewsCard2';
import NewSearchResults from './NewSearchResults';
import People21 from './People21';


class SuperComponent2 extends Component {
 render() {
   return (
     <MuiThemeProvider>
     <div className="App">

      <Appbar/>

     <AadharDiv/>
     <Toolbar2/><NewSearchResults/>
       <SearchFilters/>

       <RelatedSearch/>

        <WhoToFollow2/>
        <People21/>
        <TopNewsCard2 />

     </div>
     </MuiThemeProvider>
           );
         }
       }
 /* const app=document.getElementById('root')
ReactDom.render(<Layout/>,app);
*/
export default SuperComponent2;
