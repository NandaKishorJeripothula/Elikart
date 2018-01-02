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
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const style1 = {
  height: 100,
  width: 100,
  margin: 20,

};
const RelatedSearch = () => (
  <div className="RelatedSearchs">
    <Paper style={style} zDepth={1} >
    <span style={{marginLeft:1 + 'em',float:"left"}} >
    <h2>Related Searchs</h2> </span>


<div className="TrendsIn">
      <span> <h4><a>#AadharLinking</a></h4></span>

</div><br/>


<div className="TrendsIn">
            <span> <h4><a>#HappyNewYear2018g</a></h4></span>


</div>
<div className="TrendsIn">
      <span> <h4><a>#PeekeMAtCahla</a></h4></span>

</div><br/>

<div className="TrendsIn">
      <span> <h4><a>AadharInFacebook</a></h4></span>

</div>
<div className="TrendsIn">
      <span> <h4><a>IndianRailways</a></h4></span>

</div>
<div className="TrendsIn">
      <span> <h4><a>#HoneySinghBack</a></h4></span>

</div>





</Paper>
  </div>
);

export default RelatedSearch;
