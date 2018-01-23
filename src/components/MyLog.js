import React from 'react';
import MyButton from './MyButton';
class MyLog extends React.Component {
	  constructor(props){
           super(props);
             this.state={isLoggedin:false}
	  }
	   receiveClick(){
           this.setState({isLoggedin:!this.state.isLoggedin});

	   }



render(){
  return(  
        <div>         
            <h1>Hi Stateful Parent Component</h1><br/>
            <p>I monitor if user is loged in or not</p> <br/>
            <p> Lets See Whats Your Status:<h2><i>{this.state.isLoggedin ? 'LoggedIn' : 'Not LoggedIn'}</i></h2> </p><br/>
            <h2>I am Stateless Child Component</h2>
            <p>Im a logging in button</p> <br/>
            <p><b>I dont maintian  state but ill tell parent if user clickes me</b></p>
    <MyButton  click={this.receiveClick.bind(this)}  isLoggedin={this.state.isLoggedin}      />


             </div>


  			);
	
}

};

export default MyLog;


