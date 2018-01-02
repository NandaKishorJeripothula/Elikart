import React, { Component } from 'react';
import ReactDom from 'react-dom';
import cyan500 from 'material-ui/styles/colors';

import SearchBar from 'material-ui-search-bar'

// ...
class Searchbar extends Component {
render() {
  return(
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        position:'relative',
        float:'right',
        dispaly:'inline-block',
        marginLeft:'15em',
        marginTop:'8px',
        maxWidth: 280,
        maxHeight:35,
        backgroundColor:cyan500,
        borderRadius:10,
          border: '1px solid #00BCD4',
          marginBottom:'0px',

      }}
    />
  )
}
}
export default Searchbar;
