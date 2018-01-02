import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {blue500,red900,cyan800,black} from 'material-ui/styles/colors';
import '../App.css';

var style = {
  height: '100px',
  width: '280px',
  margin: 20,
  marginBottom:0,

  textAlign: 'center',
  display: 'inline-block',

};
var style2 = {
  position:'relative',
  height: '100px',
  width: '280px',
  marginTop: 0 ,
  marginLeft:20,
  textAlign: 'center',
  display: 'inline-block',

};
var ImageStyle={
  position:'relative',
  marginTop:'-10%',
  marginLeft:'40px',
  zIndex:33,

}

const ProfileDashboard = () => (
<div className="ProfileDashboard">
<div className="FirstPaper" width='100%'>

   <span ><Paper style={style} zDepth={5} >
    first
    </Paper>

    </span>


</div>
<div >  <Avatar src="./Images/p1.jpg"  style={ImageStyle}   z-index={1} size={80} /></div>
    <div  className="SecondPaper" width='50%'>

        <span >

        <Paper style={style2}  >
           <h4>Willson verma</h4>
        </Paper>
        </span>
     </div>

    </div>

);

export default ProfileDashboard;
