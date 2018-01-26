import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
         <div>
           <ul>
             <li><Link to="/"
                       is>Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to ="/auth">Login/SingUp</Link></li>
           </ul>
     
           <hr/>
     
           <Route exact path="/" component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/auth" component={Auth}/>
          <Route component={NoLink}></Route>
         </div>
       </Router>
      </div>        
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const NoLink = () => (
  <div>
    <h2>404 Error</h2>
  </div>
)
const Auth = () => (
  <div>
    <h2>Auth</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
export default App;
