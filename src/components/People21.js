import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {blue500,red900,cyan800,black} from 'material-ui/styles/colors';
import '../App2.css';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

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
  height: '180px',
  width: '280px',
  marginTop: '0px' ,
  marginLeft:20,

  display: 'inline-block',

};
var ImageStyle={
  position:'relative',
  marginTop:'-4em',
  marginLeft:'40px',
  zIndex:33,

}
var LabelText={
  textTransform: 'capitalize',
}
var buttonStyle={
  backgroundColor: '#FFFFFF',
borderRadius:50 ,
  padding:' 1px  1px 1px 1px',
  border: '1px solid #00BCD4',
    texttransform: 'lowercase',
    fontSize: '5px',

}
const People21 = () => (
<div className="people21">
<div className="FirstPaper" width='100%'>

   <span ><Paper style={style} zDepth={1} >
    <img className="AadharImage" src="./Images/AadharBack.jpg" />
    </Paper>

    </span>


</div>
<div >  <Avatar src="./Images/AadharIcon.jpg"  style={ImageStyle}   z-index={1} size={80} /></div>
    <div  className="SecondPaper" width='50%'>




        <Paper style={style2}  >

          <span className="AadharButton"><FlatButton label="Follow "  style={buttonStyle} primary={true} labelStyle={LabelText}  /></span>
        <div className="Aahdhar" >
        <span style={{fontSize:'25px'}}><strong>Aadhar </strong></span>
          <div>   @UIDAI</div>
      </div>
      <div className="AadharProfileText">
      <div style={{fontSize:'15px'}}>
             Official Twitter account of the
      </div>
      <div style={{fontSize:'15px'}}>
           Unique Identification Authority of India
      </div>
      <div style={{fontSize:'15px'}}>
          RTs are not endorsements.
      </div>
</div>




        </Paper>

     </div>

    </div>

);

export default People21;
