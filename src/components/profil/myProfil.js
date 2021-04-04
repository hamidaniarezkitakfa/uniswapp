import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, } from '@material-ui/core/styles';
import {Grid,Container,Box,Hidden,Avatar,Card, CardContent,Typography,GridList, Divider,IconButton,Button,Tabs,Tab,AppBar
,TextField,DialogActions,Dialog,useMediaQuery ,DialogContent,DialogTitle,Select,Input,InputLabel ,Badge,
InputAdornment, FormControl,} from '@material-ui/core';
import NavBar from '../actualite/drawer';
import Discussions from '../actualite/Discussions'
import PropTypes from 'prop-types';
import Publication from '../actualite/publication'
import SwipeableViews from 'react-swipeable-views';
import {FiEdit} from 'react-icons/fi';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom'
import AfficheGroup from './afficheGroup'
import AfficheAbonnement from './afficheAbonnement';
import AfficheAbonnés from './afficheAbonnés';
import About from './about';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
 

    root: {
        flexGrow: 1,
        fontWeight: 400,
        fontStyle: 'normal',   
        fontSize: 14,
        lineHeight: 1.8,
        padding: 0,
        margin: 0,   
        color: '#777D74',
        background: '#fafafb',
        overflow: 'hidden',
      },
      root1: {
        flexGrow: 1,
        fontWeight: 400,
        fontStyle: 'normal',   
        fontSize: 14,
        lineHeight: 1.8,
        padding: 0,
        margin: 0,   
        color: '#777D74',
        background: '#fafafb',
        overflow: 'hidden',
        display:'flex',
      },
      image:{
       
        height: 150,
        width: 150,
      
        boxShadow: '0 6px 21px 0 rgb(0 0 0 / 12%)',
        border: '3px solid white',
    
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
      root2: {
        marginBottom:20,
        marginTop:20,
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      formControl: {
        margin: theme.spacing(1),
       
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      margin: {
        margin: theme.spacing(1),
      },
      
      textField: {
        width: '25ch',
      },
      input:{
        visibility: 'hidden',
      },
      btnR:{
        textTransform: 'lowercase',
        height: 25,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor:'#50b5ff',
        marginTop:7,
        marginLeft:10,
        marginRight:10,
        marginLeft:'auto'
      },
      tab:{
        '& .MuiBox-root':{
          paddingTop:20,
          paddingBottom:20,
          paddingRight:0,
          paddingLeft:0,
            },
      },
  }));














function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={5}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  





 function MyProfil() {


    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [openp, setOpenp] = React.useState(false);
  
    const handleClickOpenp = () => {
      setOpenp(true);
    };
    const handleClosep = () => {
      setOpenp(false);
    };
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
   
      const [state, setState] = React.useState({
        age: '',
        
    });
  
    const change = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    const [val, setVal] = React.useState({
     
      password: '',
      
      showPassword: false,
    });
  
    const pChange = (prop) => (event) => {
      setVal({ ...val, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setVal({ ...val, showPassword: !val.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div className={classes.root}>
                <Grid container spacing={2}>

<Container maxWidth="lg"  style={{padding:0 ,}} >



  {/***********************************  Navbar**************************************** */}

     <Grid  lg={1} >
        
         <NavBar/>

     </Grid>



  {/*********************************** Top image**************************************** */}

         <Grid item xs={10} sm={9} md={10} lg={12 }xl={12}className={classes.topimg} 
         style={{ marginTop:100, marginRight: 60 ,marginLeft: 60,height:250 ,}} > 

      

            <img ms={2} src={process.env.PUBLIC_URL + '/images/covert.jpg'}

         style={{width:'100%',height:'100%',objectFit: 'cover',borderRadius: '20px 20px 0px 0px'}} />
<label htmlFor="icon-button-file" style={{ position: 'relative',bottom: 50}}>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

       {/***********************************  nom utilisateur**************************************** */}
       <Card>
     <CardContent>


     


<h6 style={{fontSize:23,fontWeight:700,textAlign:'center', marginTop:0,marginBottom:10}}>Josephine Williams <br/>
<IconButton onClick={handleClickOpen}> <FiEdit  color='#212121' /></IconButton></h6>






     </CardContent>
 </Card>

 

</Grid>



 {/***********************************  photo de profile**************************************** */}



   
<div style={{textAlign:'center'}}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        style={{bottom:120}}
        badgeContent={<label htmlFor="icon-button-file" >
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>}
      >
<Avatar className={classes.image}  src={process.env.PUBLIC_URL + '/images/profil.jpg'}/>
      </Badge>
      </div>
 {/***********************************  modifier le profil**************************************** */}


 
 <div>

       <Dialog
         fullScreen={fullScreen}
         open={open}
         onClose={handleClose}
         
       >
         <DialogTitle >
         <Typography style={{color:'black', fontWeight:700,fontSize:18,textAlign:'center'}}>modifier le profil</Typography>

         <IconButton aria-label="close"  className={classes.closeButton} onClick={handleClose}>
           <CloseIcon />
         </IconButton>
                     
         </DialogTitle>
         <DialogContent>
           <Typography style={{color:'grey', fontWeight:600,marginBottom:15}}>Vos Informations</Typography>
         <form className={classes.root2}>
                 <TextField size="small"  variant="outlined" label="Nom"defaultValue="Mazouz" />
                 <TextField size="small"  variant="outlined" label="Prénom"defaultValue="Lamia" />
                 <TextField size="small" type="email"  variant="outlined" label="Adresse Mail"defaultValue="Mazouz@gmail.com" />
                 <TextField type="date" size="small" variant="outlined"  defaultValue="" />

           
      

                 <TextField style={{width:'40ch'}} variant="outlined" label="Bio" multiline rows={4}
                 
                 defaultValue=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit" />

         </form>

         <Divider/>



         <form className={classes.root2}>
     <TextField size="small"  variant="outlined" label="Université" defaultValue="Tizi-Ouzou" />
     <TextField size="small" style={{ width: '40ch'}}  variant="outlined" label="Faculté" defaultValue="Genie électrique et informatique" />
     <TextField size="small" variant="outlined" label="Département" defaultValue="Informatique" />
     <TextField size="small" variant="outlined" label="Spécialité" defaultValue="ISI" />
     <FormControl size="small"  htmlFor="outlined-age-native-simple">
       <InputLabel>Niveau</InputLabel>
       <Select
         native
         value={state.age}
         onChange={change}
         label="Age"
         inputProps={{
           name: 'age',
           id: 'outlined-age-native-simple',
           
         }}
       >
         <option aria-label="None" value="" />
         <option value={1}>L1</option>
         <option value={2}>L2</option>
         <option value={3}>L3</option>
         <option value={4}>Master 1</option>
         <option value={5}>Master 2</option>

             </Select>
           </FormControl>
         
           <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
<Input
 id="standard-adornment-password"
 type={val.showPassword ? 'text' : 'password'}
 value={val.password}
 onChange={pChange('password')}
 endAdornment={
   <InputAdornment position="end">
     <IconButton
       aria-label="toggle password visibility"
       onClick={handleClickShowPassword}
       onMouseDown={handleMouseDownPassword}
     >
       {val.showPassword ? <Visibility /> : <VisibilityOff />}
     </IconButton>
   </InputAdornment>
 }
/>
</FormControl>

         </form>
         </DialogContent>



         <DialogActions>



           <Button variant="outlined" style={{color:'white',backgroundColor:'#50b5ff'}} >
             Modifier
           </Button>
         
         </DialogActions>
       </Dialog>
</div>










{/*********************************** infos de compte**************************************** */}

                
<Grid   item xs={10} sm={9} md={10} lg={12 }xl={12} style={{  marginRight: 60 ,marginLeft: 60,}} >  



<AppBar position="static" color="white" style={{marginTop:20}}>
<Tabs
value={value}
onChange={handleChange}
indicatorColor="primary"
textColor="primary"
variant="fullWidth"
variant="scrollable"
scrollButtons="on"

>
<Tab  style={{textTransform:'lowercase '}}label="publications" {...a11yProps(0)} />
<Tab  style={{textTransform:'lowercase '}}label="à propos" {...a11yProps(1)} />
<Tab style={{textTransform:'lowercase '}} label="abonnés " {...a11yProps(2)} />
<Tab style={{textTransform:'lowercase '}} label=" abonnements" {...a11yProps(3)} />
<Tab  style={{textTransform:'lowercase '}}label="photos " {...a11yProps(4)} />
<Tab  style={{textTransform:'lowercase '}}label="groupes et pages" {...a11yProps(5)} />
</Tabs>

</AppBar>
<SwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={value}
onChangeIndex={handleChangeIndex}
>




{/*********************************** publications**************************************** */}

<TabPanel value={value} index={0} dir={theme.direction}>
{/*********************************** Bio**************************************** */}

<Grid xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}
align="center"
justify="center" >

<Card style={{ marginBottom: 25,borderRadius:20,backgroundColor: 'rgb(162 150 150 / 15%)',  
backdropFilter: 'blur(5px)' }}>

<CardContent> 



<input accept="image/*" className={classes.input} id="icon-button-file" type="file" />

<Typography style={{ fontSize:15, }}>
    
Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</Typography>
</CardContent>

</Card>
</Grid>

<Grid item xs={12} style={{ marginTop:10,}} >

<Box display="flex" >


<Grid item xs={12} sm={12} lg={8} style={{ marginRight: 25, }}>



 


   {/*********************************** pub**************************************** */}

<Publication/>
</Grid>


{/***********************************groupes et photos **************************************** */}

<Hidden only={['xs', 'sm']}>

<Grid item xs={4} sm={4} lg={4} >





<Card style={{ marginBottom: 25,borderRadius:15 }}>
<CardContent>
<h6 style={{fontSize:17,fontWeight:700,marginTop: 10 ,marginBottom: 30,}}> Photo Gallery</h6>


<GridList cellHeight={80}  className={classes.gridList} cols={3}>

 <img src={process.env.PUBLIC_URL + '/images/i9.jpg'} onClick={handleClickOpenp} />
 <img src={process.env.PUBLIC_URL + '/images/img.jpg'} />
 <img src={process.env.PUBLIC_URL + '/images/img5.jpg'} />
 <img src={process.env.PUBLIC_URL + '/images/img6.png'} />

</GridList>

</CardContent>
</Card>

   {/**********************affichage des photos**************** */}
   <Grid item xs={3} sm={5} md={7} lg={8} xl={12}>

   <Dialog onClose={handleClosep}  open={openp}>
   <img style={{width:'100%',height:'100%'}} src={process.env.PUBLIC_URL + '/images/img2.jpg'}/>

   

   </Dialog>

   </Grid>


   <Card style={{ marginBottom: 25,borderRadius:15 }}>

<CardContent>


<Typography style={{ marginBottom: 25,fontSize:19,fontWeight:700, }}>
 Mes groupes

</Typography>
     <Box display='flex'style={{marginBottom:15,marginTop:10}}>

     <Avatar  src={process.env.PUBLIC_URL + '/images/i7.jpg'}/>

     <Typography style={{marginLeft:20,}}>
     <Link to={'/groupe'} style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>
       WP Developers </Link> <br/>
     <span style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
     </Typography>
     </Box>

<Divider/>

     <Box display='flex'style={{marginBottom:15,marginTop:10}}>

     <Avatar  src={process.env.PUBLIC_URL + '/images/i8.jpg'}/>

     <Typography style={{marginLeft:20,}}>
     <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>

   <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span> 
     </Typography>

     </Box>

<Divider/>



<Box display='flex'style={{marginBottom:15,marginTop:10}}>

<Avatar  src={process.env.PUBLIC_URL + '/images/i10.jpg'}/>

<Typography style={{marginLeft:20,}}>
<a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
<span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
</Typography>

</Box>

<Divider/>



<Box display='flex' style={{marginBottom:15,marginTop:10}}>
<Avatar  src={process.env.PUBLIC_URL + '/images/img4.jpg'}/>

<Typography style={{marginLeft:20,}}>
<a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
<span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
</Typography>

</Box>

<Divider/>

</CardContent>

</Card>
</Grid>

</Hidden>

</Box>
</Grid>


</TabPanel>


{/*********************************** a propos**************************************** */}

<TabPanel value={value} index={1} className={classes.tab}>
<About/>

</TabPanel>



{/***********************************  abonnes**************************************** */}


<TabPanel  value={value} index={2} dir={theme.direction} className={classes.tab}>

<AfficheAbonnés/>


</TabPanel>

{/***********************************  abonnements**************************************** */}

<TabPanel value={value} index={3} dir={theme.direction} className={classes.tab}>

<AfficheAbonnement/>

</TabPanel>

{/*********************************** photos**************************************** */}

<TabPanel value={value} index={4} dir={theme.direction} className={classes.tab}>
<Card style={{ marginBottom: 25,borderRadius:15 }}>
<CardContent>
<h6 style={{fontSize:19,fontWeight:700,marginTop: 10 ,marginBottom: 30,textAlign:'center'}}> Photo Gallery</h6>


<GridList cellHeight={250}  className={classes.gridList} cols={3}>

 <img style={{borderRadius:15}}   src={process.env.PUBLIC_URL + '/images/i9.jpg'} onClick={handleClickOpenp} />
 <img style={{borderRadius:15}}src={process.env.PUBLIC_URL + '/images/img.jpg'} />
 <img style={{borderRadius:15}} src={process.env.PUBLIC_URL + '/images/img5.jpg'} />
 <img style={{borderRadius:15}}src={process.env.PUBLIC_URL + '/images/img6.png'} />

</GridList>

</CardContent>
</Card>
<Dialog onClose={handleClosep}  open={openp}>
   <img style={{width:'100%',height:'100%'}} src={process.env.PUBLIC_URL + '/images/img2.jpg'}/>

   

   </Dialog>

</TabPanel>





{/***********************************  groupes et pages**************************************** */}

<TabPanel value={value} index={5} dir={theme.direction} className={classes.tab}>
<AfficheGroup/>
</TabPanel>


</SwipeableViews>
</Grid>







     
         <Grid item  >
         <Hidden only={['xs','sm']}>
         <Discussions/>     
         </Hidden>

     </Grid>
     
</Container>
</Grid>

            
        </div>
    )
}export default MyProfil;