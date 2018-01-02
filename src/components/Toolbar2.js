import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import '../App2.css';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
var buttonStyle2={
 borderBottom:'1px solid #00BCD4',
}
var buttonStyle={
  backgroundColor: '#FFFFFF',
borderRadius:50 ,
  padding:' 1px  1px 1px 1px',
  border: '1px solid #00BCD4',
    texttransform: 'lowercase',
    fontSize: '5px',

}
  var ToolbarStyle={
    backgroundColor:'white',
  }
  var LabelText={
    textTransform: 'capitalize',
  }

export default class Toolbar2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style={ToolbarStyle} >
        <ToolbarGroup firstChild={true}>
        <span className="TopButton">  <FlatButton label="Top" style={buttonStyle2}  labelStyle={LabelText}  /></span>
      <span>  <FlatButton label="Latest" style={buttonStyle2}  labelStyle={LabelText} /></span>
        <span>   <FlatButton label="People" style={buttonStyle2}  labelStyle={LabelText}  /></span>
        <span>   <FlatButton label="Photos" style={buttonStyle2}  labelStyle={LabelText} /></span>
        <span>   <FlatButton label="Videos" style={buttonStyle2}  labelStyle={LabelText} /></span>
          <span> <FlatButton label="News" style={buttonStyle2}   labelStyle={LabelText}/></span>
        <span><FlatButton label="Broadcast" style={buttonStyle2} labelStyle={LabelText}  /></span>

        </ToolbarGroup>
        <ToolbarGroup>

          <FontIcon className="muidocs-icon-custom-sort" />
          
          <span className="FollowButton"><FlatButton label="Follow Search"  style={buttonStyle} primary={true} labelStyle={LabelText}  /></span>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Search settings" />
            <MenuItem primaryText="Embed This Search" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
