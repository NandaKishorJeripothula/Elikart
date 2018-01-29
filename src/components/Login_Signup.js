import React from 'react';
import ReactDOM from 'react-dom';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import FinalLogo2 from './FinalLogo2.png';
import './Login_Signup.css';
export default class Login_Signup extends React.Component{
	
	render(){
		
		return(
			<div className="Login_Signup_body">
			<MuiThemeProvider>
			<GridList cols={2} cellHeight={800}>
			<GridListTile cols={1}>
			<img id="logo" src={FinalLogo2}/>
			<GridList cols={2}>
			<GridListTile cols={1}>
			 <TextField id="Username"
			 required
       		placeholder="Username"
       		/><br/>
        	<TextField id="Password"
          placeholder="password"
          type="password"
          autoComplete="current-password"
        	required
        	/><br/>
			</GridListTile>
			<GridListTile cols={1}>
			 <Button raised color="secondary" >
        	Login
      		</Button>
			</GridListTile>
			</GridList>			
			
        	
			</GridListTile>

			<GridListTile cols={1}>
			<h6 id="righttext">New to Elikart? SignUp below </h6>
			 <TextField id="Firstname"
			 required
       		placeholder="Firstname"
       		/><br/>
       		 <TextField id="Lastname"
			 required
       		placeholder="Lastname"
       		/><br/>
       		 <TextField id="Uname"
			 required
       		placeholder="Username"
       		/><br/>
       		 <TextField id="email"
			 required
       		placeholder="email"
       		/><br/>
       		 <TextField id="Pword"
         		placeholder="password"
         	 type="password"
          	autoComplete="current-password"
        	required
        	/><br/><br/>
        	 <Button raised color="secondary" >
        	SignUp
      		</Button>
			</GridListTile>
			</GridList>
			
			
			</MuiThemeProvider>
			</div>
			);
	}
}
