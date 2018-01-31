import React from 'react';
import ReactDOM from 'react-dom';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import FinalLogo2 from './FinalLogo2.png';
import './Login_Signup.css';
import {saveOffline } from './config';
import {authenticateUser, Userinfo, MakeUser} from './api';

export default class Login_Signup extends React.Component{
	constructor() {
		super()
		this.state = {
		  username: '',
		  password: '',
			email:'',
			phonenumber:'',
		  firstname:'',
			lastname:'',
		};
		}
	  handleUsernameChange = (e) => {
		this.setState({
		  ...this.state,
		  username: e.target.value
		});
	  }
	  handlePasswordChange = (e) => {
		this.setState({
		  ...this.state,
		  password: e.target.value
		});
	  }
	  handleEmailChange = (e) => {
		this.setState({
		  ...this.state,
		  email: e.target.value
		});
	  }
	  handleFirstnameChange = (e) => {
		this.setState({
		  ...this.state,
		  firstname: e.target.value
		});
		}
		handlePhonenumChange = (e) => {
			this.setState({
				...this.state,
				phonenumber: e.target.value
			});
			}
	  handleLastnameChange = (e) => {
		this.setState({
		  ...this.state,
		  lastname: e.target.value
		});
		} 

		login = () => {
			console.log('on login clicked');
			authenticateUser(this.state.username, this.state.password, false).then(authResponse => {
				console.log(authResponse);
				if (authResponse.auth_token) {
					//Save the auth token offline to be used by the filestore service
					saveOffline(authResponse.auth_token)
					Userinfo().then(Userinfo => {
						console.log(JSON.stringify(Userinfo))
					});
				} else {
					console.log(JSON.stringify(authResponse));
				}
			});
		}
	
		register = () => {
			console.log('on register clicked');
			authenticateUser(this.state.username, this.state.password, true).then(authResponse => {
				console.log(authResponse);
				if (authResponse.auth_token) {
					saveOffline(authResponse.auth_token)
					MakeUser(authResponse.hasura_id,this.state.lastname,this.state.email,this.state.phonenumber,this.state.firstname).then(userres=>{
						console.log(JSON.stringify(userres))
					})
					console.log("SignUp Successful! \n Your auth credentials are: " + JSON.stringify(authResponse, null, 2))
				} else {
					console.log(JSON.stringify(authResponse));
				}
			});
		}
	
	render(){
		
		return(
			<div className="Login_Signup_body">
			<MuiThemeProvider>
			<GridList cols={2} cellHeight={800}>
			<GridListTile cols={1}>
			<img id="logo" src={FinalLogo2}/>
			<GridList cols={2}>
			<GridListTile cols={1}>
			 <TextField 
			 onChange={this.handleUsernameChange}
			 id="Username"
			 required
       		placeholder="Username"
       		/><br/>
			<TextField 
			onChange={this.handlePasswordChange}
			id="Password"
          placeholder="password"
          type="password"
          autoComplete="current-password"
        	required
        	/><br/>
			</GridListTile>
			<GridListTile cols={1}>
			 <Button 
              onClick= {(e) => {
                this.login()
              }}raised color="secondary" >
        	Login
      		</Button>
			</GridListTile>
			</GridList>			
			
        	
			</GridListTile>

			<GridListTile cols={1}>
			<h6 id="righttext">New to Elikart? SignUp below </h6>
			 <TextField 
			 onChange={this.handleFirstnameChange}
			 id="Firstname"
			 required
       		placeholder="Firstname"
       		/><br/>
			<TextField 
			onChange={this.handleLastnameChange}
			id="Lastname"
			 required
       		placeholder="Lastname"
       		/><br/>
			<TextField
			onChange={this.handleUsernameChange}	
			id="Uname"	
			 required
       		placeholder="Username"
       		/><br/>
			<TextField
			onChange={this.handleEmailChange}
			id="email"
			 required
       		placeholder="email"
       		/><br/>
			<TextField
			onChange={this.handlePhonenumChange}
			id="phonenum"
			 required
       		placeholder="phonenumber"
       		/><br/>
			<TextField id="Pword"
			onChange={this.handlePasswordChange}
         		placeholder="password"
         	 type="password"
          	autoComplete="current-password"
        	required
        	/><br/><br/>
			 <Button 
              onClick= {(e) => {
                this.register()
              }} raised color="secondary" >
        	SignUp
      		</Button>
			</GridListTile>
			</GridList>
			
			
			</MuiThemeProvider>
			</div>

			);
	}
}

