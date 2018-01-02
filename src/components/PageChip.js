import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import {blue500,red900,cyan800,black} from 'material-ui/styles/colors';
import '../App.css';

const style = {
  height: '150px',
  width: '260px',
  margin: 20 ,
  marginLeft:50,
  textAlign: 'center',
  display: 'inline-block',

};
const style2 = {
  height: '100px',
  width: '140px',

  textAlign: 'center',
  display: 'inline-block',

};

const PageChip = () => (
<div className="PageChipOuterDiv">
<Paper style={style} zDepth={1} >

<div>
<p className="ChipPara">
<span>
<span className="chip"> <i class="fa fa-copyright" aria-hidden="true"></i>Twitter2018</span>
<span className="chip"> About</span> <span className="chip">Help Center</span> <span  className="chip">Terms</span>
</span>
</p>
<p className="ChipPara">
<span>
<span className="chip">Privacy policy</span>
<span className="chip"> Cookies</span> <span className="chip">Ads info</span> <span  className="chip">Brand</span>
</span>
</p>
<p className="ChipPara">
<span>
<span className="chip">Businesses</span>
<span className="chip"> Marketing</span> <span className="chip">Jobs</span> <span  className="chip">Apps</span> <span  className="chip">Status</span>
</span>
</p>
<p className="ChipPara">

<span className="chip">Developers</span>
</p>
<Divider/>

<p className="ChipPara">

<span className="chip"><i class="fa fa-external-link" aria-hidden="true"></i>Advertise with Twitter	</span>
</p>

</div>

</Paper>

</div>


);

export default PageChip;
