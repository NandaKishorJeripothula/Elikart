import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';



const style = {margin: 5};


const AvatarExp = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="../Images/Twitter.png" />
      }
    >
      Image Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src="./Images/Niti2.jpg"
          size={30}
          style={style}
        />
      }
    >
      Image Avatar with custom size
    </ListItem>

  </List>
);

export default AvatarExp;
