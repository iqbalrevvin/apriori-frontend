import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '../components/Header';
import Icon from '@material-ui/core/Icon';
import {Link, withRouter} from 'react-router-dom'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            IqbalRevvin
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const Signup = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            {/* Hero unit */}
            <Container maxWidth="xl" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Register Cooming Soon
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                Because this is only for the need for a test, the registration feature is disabled.
            </Typography>
                </Container>
                {/* End hero unit */}
            <Container maxWidth="sm" component="main">
                <Grid container spacing={9} alignItems="center">
                    <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}></Grid>
                    <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>
                        <Link to='/' className={classes.link}>
                            <Button variant="contained" color="primary" endIcon={<Icon>home</Icon>}>
                                Go Home
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}></Grid>
                </Grid>
            </Container>
            {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Box mt={5}>
                <Copyright />
                </Box>
            </Container>
        {/* End footer */}
        </React.Fragment>
    );
}

export default withRouter(Signup)

const useStyles = makeStyles((theme) => ({
    '@global': {
        
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    heroContent: {
        padding: theme.spacing(4, 0, 6),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        },
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}));