import React from 'react';
import ReactDOM from 'react-dom';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import ELlikartLogo from './ElikartLogo.png';
import './Login_Signup.css';
export default class Login_Signup extends React.Component{
	
	render(){
		return(
			<div className="Login_Signup_body">
			<MuiThemeProvider>
				<GridList cols={2} cellHeight={800}>
					<GridListTile cols={1} className="loginGrid">
									<img src={ELlikartLogo} className="responsive-img" alt="Elikart Logo "/>
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
								<br/>
								<br/>
								<Button raised color="secondary" >
									Login
								</Button>
					
					</GridListTile>
					<GridListTile cols={1} className="loginGrid">
						<h5>New to Elikart? SignUp below </h5>
						<GridListTile>
							<TextField id="Firstname"
								required
								className="textField"
								placeholder="Firstname"
								/>
							<TextField id="Lastname"
								className="textField"
								required
								placeholder="Lastname"
							/>
							<TextField id="Uname"
								className="textField"
								required
								placeholder="Username"
							/>
							<TextField id="email"
								className="textField"
								required
								placeholder="email"
							/>
							<TextField id="Pword"
								className="textField"
								placeholder="password"
								type="password"
								required
							/>
							<TextField id="CPword"
								className="textField"
								placeholder=" confirm password"
								type="password"
								required
							/>
							<TextField id="mobile_no"
								className="textField"
								required
								placeholder="Mobile Number"
							/>
							<br/>   
							<br/>  
							<Button raised color="secondary" >SignUp</Button>
						</GridListTile>
					</GridListTile>
				</GridList>
			</MuiThemeProvider>
			</div>
			);
	}
}
