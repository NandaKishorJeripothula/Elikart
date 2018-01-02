import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import dev1 from './Images/dev.png';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';


const style = {margin: 5};


const ProfileCard = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Willson Verma"
      avatar="Niti2.png"
    />
    <CardMedia

    >
      <img src="dev1.png" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>

    </CardText>
    <CardActions>
      <FlatButton label="Tweets" />
      <FlatButton label= "Following" />
    </CardActions>
  </Card>

  const AvatarExampleSimple = () => (
   <List>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar src="images/uxceo-128.jpg" />
       }
     >
       Image Avatar
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar
           src="images/uxceo-128.jpg"
           size={30}
           style={style}
         />
       }
     >
       Image Avatar with custom size
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
       }
     >
       FontIcon Avatar
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar
           icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
           color={blue300}
           backgroundColor={indigo900}
           size={30}
           style={style}
         />
       }
     >
       FontIcon Avatar with custom colors and size
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar icon={<FileFolder />} />
       }
     >
       SvgIcon Avatar
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar
           icon={<FileFolder />}
           color={orange200}
           backgroundColor={pink400}
           size={30}
           style={style}
         />
       }
     >
       SvgIcon Avatar with custom colors and size
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={<Avatar>A</Avatar>}
     >
       Letter Avatar
     </ListItem>
     <ListItem
       disabled={true}
       leftAvatar={
         <Avatar
           color={deepOrange300}
           backgroundColor={purple500}
           size={30}
           style={style}
         >
           A
         </Avatar>
       }
     >
       Letter Avatar with custom colors and size
     </ListItem>
   </List>
 );

 export default AvatarExampleSimple;

);

export default ProfileCard;
