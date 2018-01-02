import React, { Component } from 'react';
//import Projects from './components/Projects' ;
import dev from './Images/dev.png';
import TwitterImage from './Images/Twitter.png' ;
export default class  Header extends React.Component {
 render()
 {
        const name='TwitterHeader';
      return (
        <div className="Header">
          myAppw {name}
           <div ClassName="logo">
           <h1>this is header</h1>
            <img src={dev} alt="logo" />
            <img src={TwitterImage} alt="TwitterImage" />

             </div>



       </div>
              );
             }
   }
