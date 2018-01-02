import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Twitter from './Images/Twitter.png';
import '../App.css';




const style = {
  height: 50,
  width: 250,

  textAlign: 'center',
  display: 'inline-block',
};

const SearchFilters = () => (
  <div className="SearchFilter" >
    <Paper style={style} zDepth={1} >
    <span style={{marginLeft:1 + 'em',float:"left"}} >
    <h2>Search Filters</h2> </span>
    <span style={{marginRight:2 + 'em',marginTop:'0.4em',float:"right"}} >
      <a><h6>Show</h6></a>
      </span>


</Paper>
  </div>
);

export default SearchFilters;
