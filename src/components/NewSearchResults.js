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
  height: 40,
  width: '40em',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor:'#B2EBF2',
};

const NewSearchResults = () => (
  <div className="newSearchResults" >
    <Paper style={style} zDepth={1} >
    <span className="NewResults"   style={{marginLeft:1 + 'em',float:"left",marginTop:'-10px'}} >
    <h4> 70 new Results</h4> </span>



</Paper>
  </div>
);

export default NewSearchResults;
