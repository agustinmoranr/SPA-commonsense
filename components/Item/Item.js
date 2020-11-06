import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    margin: 10,
  },
  media: {
    height: 80,
    backgroundSize: 'cover',
    paddingTop: '56.25%', // 16:9
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Item = ( props ) => {

  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <a href={`character/${props.id}`}><CardMedia className={classes.media} image={props.image} /></a>
      <CardContent className={classes.info}>
        <Typography variant="body1" color="textPrimary" component="h1">
        {props.name}
        </Typography>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon fontSize="default" />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Item
