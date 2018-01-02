import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TwitterImage from './Images/Twitter.png' ;
//import Aadhar1 from './Images/Aadhar1.jpg';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
var StyleMainCard={

  display: 'grid',
    flexDirection: 'row wrap',
    padding: 20,
    width:'45vw',
    marginTop:'25px',
    height:'33em'
}
const StylePaper = {
  position:'realtive',
  height:'35em',
  width: '45vw',
  marginTop: '0px',
  textAlign: 'center',
  display: 'inline-block',


};
var cardheader={
float:'left',
}
var cardtext={
float:'left',
}


const TopNewsCard2 = () => (
  <div className="TopNews">
  <Paper style={StylePaper} zDepth={1} >
  <span style={{marginLeft:1 + 'em',float:"left"}} >
  <h3>Top News</h3> </span>
  <span style={{marginRight:2 + 'em',marginTop:'0.4em',float:"right"}} >
    <a><h6>View all</h6></a>
    </span>



        <Card  style={StyleMainCard} >

      <CardHeader style={cardheader}
        title="Hinsustan Times"
        subtitle="@htTweets .Dec 24"
        avatar ="../Images/Aadhar1.jpg"
          size={80}

       />

      <CardText style={cardtext} >
       New Aadhaar linking form for Atal Pension Yojna from January 1
      </CardText>
      <CardMedia  overlay={<CardTitle title="Aadhar Linking" subtitle="New Aadhar lInking from January" />}>
         <img src="../Images/Aadhar1.jpg" alt="Aahdhar News"  />
       </CardMedia>

       <CardText style={cardtext} >
      <strong>New Aadhaar linking form for Atal Pension Yojna from January  </strong>
      After getting the Aadhaar information, the service providers will have to upload it into Central Recordkeeping Agency.


       </CardText>



      <CardActions >
  <div>
    <span>  <IconButton tooltip="Reply" style={{float:"left"}}>
          <FontIcon className="fa fa-comment-o" aria-hidden="true" />
          // use An IconButton to generate a button element around an icon
         </IconButton>
  </span>
  <span>
         <IconButton tooltip="Retweet" style={{float:"left"}}  >
             <FontIcon className="fa fa-retweet" aria-hidden="true" />
             // use An IconButton to generate a button element around an icon
            </IconButton>
    </span>
    <span  style={{float:"right"}}>
           <IconButton tooltip="Direct Message">
               <FontIcon className="fa fa-envelope-o" aria-hidden="true"/>
               // use An IconButton to generate a button element around an icon
              </IconButton>
      </span>
      <span style={{float:"right"}}>
             <IconButton tooltip="Like">
                 <FontIcon className="fa fa-heart-o" aria-hidden="true" /> label="700"
                 // use An IconButton to generate a button element around an icon
                </IconButton>
        </span>


  </div>
      </CardActions>

    </Card>
  </Paper>
  </div>

);

export default TopNewsCard2;
