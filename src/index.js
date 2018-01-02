import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import SuperComponent1 from './components/SuperComponent1';
import SuperComponent2 from './components/SuperComponent2';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter,Route,Link,Switch} from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
/* render((
  <BrowserRouter>
    <App />
    </BrowserRouter>
    <BrowserRouter>
    <Switch>
  <Route exact path='/' component={SuperComponent1}/>
  <Route path='/sc2' component={SuperComponent1}/>

), document.getElementById('root'));    */

registerServiceWorker();
