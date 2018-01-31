import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import imad from './imad.png';
import Hidden from 'material-ui/Hidden';
const tileData=[
    {
        img: imad,
        title: 'ProductName',
        author:'ABC',
        featured:true,
    },
    {
        img: imad,
        title: 'ProductName',
        author:'ABC',
        featured:true,
    },
    {
      img: imad,
      title: 'ProductName',
      author:'ABC',
      featured:true,
      },
      {
        img: imad,
        title: 'ProductName',
        author:'ABC',
        featured:true,
    }
]


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 200,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        <Hidden mdUp>  
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          </GridListTile>
        </Hidden> 
        <Hidden largeDown>  
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          </GridListTile>
        </Hidden> 
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);