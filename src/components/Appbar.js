import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo900,blue500,red900,cyan800} from 'material-ui/styles/colors';
import cyan500 from 'material-ui/styles/colors';
import TwitterImage from './Images/Twitter.png' ;
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Searchbar from './Searchbar';
import '../App.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */


  var buttonStyle = {
     backgroundColor: 'white',
      color: 'blue'
    }
    var buttonStyle2 = {
       backgroundColor: 'indigo900',
     borderRadius:50
      }
      var LabelText={
        textTransform: 'capitalize',
      }
      var SearchStyle = {
         backgroundColor: 'indigo900',
       borderRadius:50,
         border: '1px solid #00BCD4',
         maxWidth:'70%',
         maxHeight:'70%',
        }


   var rightButtons = (
     <div>



            <IconButton tooltip="Profile and Settings">
                <FontIcon className="fa fa-user-circle-o" aria-hidden="true" />
                // use An IconButton to generate a button element around an icon
               </IconButton>

            <FlatButton label="Tweet"  style={buttonStyle2}   labelStyle={LabelText}              />

      </div>
    );

      const leftButtons = (
        <div>

              <FlatButton label="Home" style={buttonStyle} labelStyle={LabelText}
                                icon={<i class="fa fa-home" aria-hidden="true"></i>}
                />
               <FlatButton label="Notifications" style={buttonStyle} labelStyle={LabelText}
                                                icon={  <i class="fa fa-bell-o" aria-hidden="true"></i>}
                 />
               <FlatButton label="Messages"  hoverColor={blue500} style={buttonStyle} labelStyle={LabelText}
                                            icon= {<i class="fa fa-envelope-o" aria-hidden="true"></i>}
                />
               <i class="fa fa-twitter fa-2x"></i>
            <Searchbar/>
         </div>
      );


const Appbar = () => (
  <AppBar

    title="Twitter"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
        className="home"
         iconElementLeft={leftButtons}
         iconElementRight={rightButtons}

          style={{backgroundColor:cyan500, }} //for setting the Appbar Backgrund color



  />

);

export default Appbar;
