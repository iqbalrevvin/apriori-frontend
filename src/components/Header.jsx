// import React, {Fragment} from 'react';
// import {AppBar, Toolbar, Typography, Link, Button} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// const Header = () => {
//     const classes = useStyles();
//     return (
//         <div>
//             <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
//                 <Toolbar className={classes.toolbar}>
//                 <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
//                     Company name
//                 </Typography>
//                 <nav>
//                     <Link variant="button" color="textPrimary" href="#" className={classes.link}>
//                     Features
//                     </Link>
//                     <Link variant="button" color="textPrimary" href="#" className={classes.link}>
//                     Enterprise
//                     </Link>
//                     <Link variant="button" color="textPrimary" href="#" className={classes.link}>
//                     Support
//                     </Link>
//                 </nav>
//                 <Button href="#" color="primary" variant="outlined" className={classes.link}>
//                     Login
//                 </Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// export default Header;

// const useStyles = makeStyles((theme) => ({
//     '@global': {
//       ul: {
//         margin: 0,
//         padding: 0,
//         listStyle: 'none',
//       },
//     },
//     appBar: {
//       borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbar: {
//       flexWrap: 'wrap',
//     },
//     toolbarTitle: {
//       flexGrow: 1,
//     },
//     link: {
//       margin: theme.spacing(1, 1.5),
//     },
//     heroContent: {
//       padding: theme.spacing(8, 0, 6),
//     },
//     cardHeader: {
//       backgroundColor:
//         theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
//     },
//     cardPricing: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'baseline',
//       marginBottom: theme.spacing(2),
//     },
//     footer: {
//       borderTop: `1px solid ${theme.palette.divider}`,
//       marginTop: theme.spacing(8),
//       paddingTop: theme.spacing(3),
//       paddingBottom: theme.spacing(3),
//       [theme.breakpoints.up('sm')]: {
//         paddingTop: theme.spacing(6),
//         paddingBottom: theme.spacing(6),
//       },
//     },
//   }));



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShopTwo from '@material-ui/icons/ShopTwo';
import {Link, withRouter} from 'react-router-dom'

const Header = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ShopTwo />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Apriori Algorithm Test
            </Typography>

            <Link to='/' className={classes.link}>
              <Button color="inherit" href='/'>Home</Button>
            </Link>
            <Link to='/signin' className={classes.link}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to='/register' className={classes.link}>
              <Button color="inherit" href='/'>Register</Button>
            </Link>
            
            
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default withRouter(Header);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}));