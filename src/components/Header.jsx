import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShopTwo from '@material-ui/icons/ShopTwo';
import {Link, withRouter} from 'react-router-dom'
import {isAuthenticated} from '../services/authServices'
import { Fragment } from 'react';

const Header = (props) => {
    // const {isAuthenticated} = useContext(AuthContext)

    const handleLogout = () => {
      if(typeof window !== 'undefined'){
          localStorage.removeItem('Token')
          localStorage.removeItem('Credential')
          props.history.push('/')
      }
  }
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
              <Button color="inherit">Home</Button>
            </Link>
            {
              !isAuthenticated() && (
                <Fragment>
                  <Link to='/signin' className={classes.link}>
                    <Button color="inherit">Login</Button>
                  </Link>
                  <Link to='/signup' className={classes.link}>
                    <Button color="inherit">Register</Button>
                  </Link>
                </Fragment>
              )
            }
            {
              isAuthenticated() && (
                <Fragment>
                  <Link to='/shop' className={classes.link}>
                    <Button color="inherit">Shop</Button>
                  </Link>
                  <Button className={classes.link} color="inherit" onClick={()=>handleLogout()}>
                    Logout
                  </Button>
                </Fragment>
              )
            }

            
            
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