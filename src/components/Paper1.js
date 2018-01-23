import React from 'react';
import Paper from 'material-ui/Paper';
import Virat from './Images/virat.jpg';

const style = {
  height: 100,
  width: '25%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Paper1 = () => (
  <div>
 
    <Paper style={style} zDepth={1} rounded={false} >
      {<img src={Virat} alt="vk"/>}



     </Paper>
    <Paper style={style} zDepth={2} rounded={false} />
    <Paper style={style} zDepth={3} rounded={false} />
    <Paper style={style} zDepth={4} rounded={false} />
    <Paper style={style} zDepth={5} rounded={false} />


  </div>
);

export default Paper1;