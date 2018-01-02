import React, { Component } from 'react';
//import Projects from './components/Projects' ;
import TextField from 'material-ui/TextField';
import '../App.css';

var AreaStyles={

  
}


export default class  PostSection extends React.Component {
 render()
 {
        const name='WillsonVerma';
      return (

          <div className="Postbar">
            <TextField  textareaStyle={AreaStyles}
              hintText="Whats Happing?"
              // floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
            />

          </div>



              );
             }
   }
