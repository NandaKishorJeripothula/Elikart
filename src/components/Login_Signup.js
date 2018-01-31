import React from 'react';
import ReactDOM from 'react-dom';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import './Login_Signup.css';
export default class Login_Signup extends React.Component{
	
	render(){
		
		return(
			<div className="Login_Signup_body">
			<MuiThemeProvider>
			<GridList cols={2} cellHeight={800}>
			<GridListTile cols={1}>
			<GridList cols={2}>
			<GridListTile cols={1}>
			 <TextField id="Username"
			 required
			 className="textField"
       		placeholder="Username"
       		/>
        	<TextField id="Password"
          placeholder="password"
		  type="password"
		  className="textField"
          autoComplete="current-password"
        	required
        	/>

			</GridListTile>
			<GridListTile cols={1}>
			<br/>
			<br/>
			 <Button raised color="secondary" >
        	Login
      		</Button>
			</GridListTile>
			</GridList>			
			
        	
			</GridListTile>

			<GridListTile cols={1}>
			<h6 id="righttext">New to Elikart? SignUp below </h6>
			<GridList cols={2} cellHeight={700}>
			<GridListTile cols={1}>
			
			 <TextField id="Firstname"
			 required
			 className="textField"

       		placeholder="Firstname"
       		/><br/>
				<TextField id="Lastname"
							 className="textField"

			 required
       		placeholder="Lastname"
       		/><br/>
				<TextField id="Uname"
							 className="textField"

			 required
       		placeholder="Username"
       		/><br/>
				<TextField id="email"
							 className="textField"

			 required
       		placeholder="email"
       		/><br/>
				<TextField id="Pword"
							 className="textField"

         		placeholder="password"
         	 type="password"
          	
        	required
        	/><br/>
			<TextField id="CPword"
						 className="textField"

         		placeholder=" confirm password"
         	 type="password"
          
        	required
        	/><br/>
			<TextField id="mobile_no"
						 className="textField"

			 required
       		placeholder="mobile no"
       		/><br/>
        	
			</GridListTile>
			<GridListTile>
			<br/>
			<br/>
        	 <Button raised color="secondary" >
        	SignUp
      		</Button>

			</GridListTile>
			</GridList>
			</GridListTile>
			</GridList>
			
			
			</MuiThemeProvider>
			</div>
			);
	}
}
