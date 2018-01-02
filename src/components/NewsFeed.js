import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TwitterImage from './Images/Twitter.png' ;
import HasuraChristmas from './Images/HasuraChristmas.jpg';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';





 class NewsFeed extends Component {
  render() {
    return (
      <MuiThemeProvider>
<div>
      <card>

      <CardHeader
        title="whats happing"
        subtitle="@HasuraHQ .Dec 24"
        avatar src="./Images/Twitter.png"
       />


        </card>
      </div>
      </MuiThemeProvider>

    );
          }
        }









export default NewsFeed;
