
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.actions";
import stream from './stream';


import {
  makeStyles, withStyles, Card, CardMedia, CardContent, CardActions, Collapse, Divider, MenuItem, InputAdornment,
  Link, List, ListItem,
  Avatar, IconButton, Typography, Menu, ListItemIcon, ListItemText, TextField, Box
} from '@material-ui/core';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import Commentaire from './commentaire'
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { MdFavorite } from 'react-icons/md'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from 'bootstrap';
import Stream from "./stream";

/**css de page */ 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {


      height: 40,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 10,

    },

    '& .MuiLink-underlineHover': {

      '&:hover': {
        textDecoration: 'none',
      }


    },


  },

  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },


  hide: {
    display: 'none',
  },

  like: {
    marginLeft: 10,
    cursor: 'Pointer',
    '&:hover': {
      color: '#50b5ff',
    },
  },
  buttonAbn: {
    backgroundColor: '#50b5ff',
    color: 'white',
    cursor: 'Pointer',
    position: 'relative',
    left: 60,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 15,
    width: 95,
    paddingLeft: 15,
    '&:hover': {
      backgroundColor: '#3883b78a',

    },
  },

}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({


}))(MenuItem);


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),

  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: 0,
    color: theme.palette.grey[500],
  },
  titre: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.titre} variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: 350,

  },
}))(MuiDialogContent);





/**debut de fonction */ 


export default function Publication() {

  const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };




  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);

    }



  }, [loadPost, dispatch]);








  
  return (
 


<div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Stream post={post} key={post.screamId} />;
          })}
      </ul>
    </div>


      
 
  )   
}
