import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import '../assets/styles/components/SingleLineGridList.scss';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  toolbar: {
    // gridArea: 1 / 1,
    // display: 'grid',
    width: '100%',
    position: 'absolute',
    zIndex: '1',
    paddingRight: '16px',
  },
  gridList: {
    zIndex: '0',
    position: 'relative',
    // gridArea: 1 / 1,
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
  {
    'title': 'Rick Sanchez',
    'img': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    'title': 'Morty Smith',
    'img': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    'title': 'Summer Smith',
    'img': 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='flex-end'
        className={classes.toolbar}
      >
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </Grid>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      {/* <FavoriteIcon />
      <FavoriteBorderIcon />
      <ShareIcon /> */}
    </div>
  );
}
