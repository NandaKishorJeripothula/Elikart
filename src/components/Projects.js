import React, { Component } from 'react';



class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        myprojects
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
/* <div >
 <List>
<ListItem primaryText="Nick"
 leftAvatar={<Avatar src="./Images/Niti2.jpg" />}

rightIconButton={<span className="FollowButton"><FlatButton label="Follow"  style={buttonStyle} primary={true}   /></span>}

/>
<Divider />
<ListItem primaryText="Narendr"
 rightIconButton={  <button className="button">Follow</button>}
/>
<Divider />
<ListItem primaryText="kirti Sanon" />
<Divider />
<ListItem primaryText="Amit Sahah"  />

</List>
<Divider />
</div>
*/
