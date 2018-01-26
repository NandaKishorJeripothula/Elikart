import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';
import { MuiThemeProvider } from 'material-ui/styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider>
              <Reboot />
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
                    </div>
                </Router>
            </MuiThemeProvider>
      </div>        
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
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
