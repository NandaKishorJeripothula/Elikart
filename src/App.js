import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SuperComponent1 from './components/SuperComponent1' ;
import SuperComponent2 from './components/SuperComponent2' ;
import IconButton from 'material-ui/IconButton';
import {Route,Router,browserHistory} from 'react-router';
     class App extends Component {
      render() {
      return (
        <MuiThemeProvider>
       <div className="App">


         <SuperComponent1/>
        </div>
        </MuiThemeProvider>
               );
          }
         }
                         /*const app=document.getElementById('root')
                               ReactDom.render(<Layout/>,app);
                          */
export default App;
