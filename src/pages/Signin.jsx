import React, {useState, useContext, Fragment} from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox, 
    Grid, 
    Box,
    Typography,
    makeStyles,
    Container,
    LinearProgress 
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link, Redirect, withRouter} from 'react-router-dom';
import CopyRight from '../components/CopyRight';
import {isAuthenticated} from '../services/authServices'
import Header from '../components/Header';
import {Context as AuthContext} from '../services/context/AuthContext'

const SignIn = () => {
    const classes = useStyles();
    const {state, signin} = useContext(AuthContext)
    const [value, setValue] = useState({email: '', password: ''})

    const {email, password} = value
    const {horizontal, vertical} = state

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    const handleChange = name => event => {
        setValue({
            ...value,
            [name]: event.target.value
        })
    }
    
    const test(){
      alert('test hello!')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signin({email, password})
        
    }

    const showLoading = () => (
        state.loading && (
            <LinearProgress style={{ top: 27,  alignItems: 'center', }}/>
        )
    )

    const redirectUser = () => {
        if(state.redirectToReferrer){
            if(isAuthenticated()){
                return <Redirect to='/'/>
            }
        }
    }

    const checkLogin = () => {
        if(isAuthenticated()){
            return <Redirect to='/' />
        }else{
            return false
        }
    }

    // const {email, password, redirectToReferrer, vertical, horizontal, loading, openAlert, typeAlert, messageAlert} = values
    // const {user} = isAuthenticated()

    // const Alert = (props) => {
    //     return <MuiAlert elevation={6} variant="filled" {...props} />
    // }
    // const handleChange = name => event => {
    //     setValues({
    //     ...values,
    //     openAlert: false,
    //     [name]: event.target.value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setValues({
    //     ...values,
    //     loading: true,
    //     disable: 'disable'
    //     })
    //     if(email==='' && password===''){
    //     setValues({
    //         ...values,
    //         loading: false,
    //         openAlert: true,
    //         typeAlert: 'warning',
    //         messageAlert: 'Email and password must not be blank'
    //     })
    //     }else{
    //     signin({email, password})
    //     }
    // }

    // const redirectUser = () => {
    //     if(redirectToReferrer){
    //     if(user){
    //         return <Redirect to='/'/>
    //     }
    //     }
    // }

    // const showLoading = () => (
    //     loading && (
    //     <LinearProgress style={{ top: 27,  alignItems: 'center', }}/>
    //     )
    // )
    // const checkLogin = () => {
    //     if(user){
    //         return <Redirect to='/' />
    //     }else{
    //         return false
    //     }
    // }

    return (
        <Fragment>
            <Header/>
            <Container component="main" maxWidth="xs">
            <Snackbar anchorOrigin={{ horizontal, vertical }} open={state.openAlert} autoHideDuration={6000} severity="error">
                <Alert severity={state.typeAlert}>
                    {state.messageAlert}
                </Alert>
            </Snackbar>
            <CssBaseline />
            {/* {JSON.stringify(value)} */}
            {redirectUser()}
            {checkLogin()}
            {showLoading()}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Sign in</Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField onChange={handleChange('email')} value={email} variant="outlined" margin="normal" 
                        label="Email Address" autoComplete="email" required fullWidth autoFocus />
                    <TextField onChange={handleChange('password')} value={password} variant="outlined" margin="normal" 
                        label="Password" type='password' required fullWidth />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={state.loading}>
                        Sign In
                    </Button>
                    <Grid container>
                        {/* <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid> */}
                        <Grid item>
                        <Link className="nav-link" variant="body2" to="/signup">Don't have an account? Sign Up</Link>
                        {/* <Link href="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link> */}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <CopyRight />
            </Box>
            </Container>
        </Fragment>

    );
}

export default withRouter(SignIn)

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 0 16px rgba(0,0,0,0.5)',
        padding: 20,

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));