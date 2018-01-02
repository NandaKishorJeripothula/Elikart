import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo900,blue100,red900,cyan800} from 'material-ui/styles/colors';
import cyan500 from 'material-ui/styles/colors';
import TwitterImage from './Images/Twitter.png' ;
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import Paper from 'material-ui/Paper';



   var TextStyle={
    marginLeft:'-40%',
    backgroundColor: 'cyan500',
    float:'left',

  }

const StylePaper = {
  height: 50,
  width: '30.7em',

  textAlign: 'center',
  display: 'inline-block',
    backgroundColor:blue100,
borderColor:indigo900,

};
var FontStyle={
  top:'0',
  marginTop:'12px',
  marginLeft:'10%',
float:'left',

}

const Postbar1 = () => (
<span className="Postbar">
  <Paper  style={StylePaper}  zDepth={1} >
    <FontIcon style={FontStyle}   className="fa fa-user-circle-o fa-2x" aria-hidden="true"  />
  <div id="PostText">
    <TextField textareaStyle={TextStyle}
    hintText="Whats Happing?"
    // floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
  />
  </div>
  </Paper>
</span>



);
export default Postbar1;
