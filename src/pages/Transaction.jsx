import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Paper } from '@material-ui/core';
import Header from '../components/Header';
import ProductList from '../components/shop/ProductList';
import CartList from '../components/shop/CartList';
import {isAuthenticated} from '../services/authServices'
import {Redirect} from 'react-router-dom';
import AprioriData from '../components/transaction/AprioriData'
import ProcessCart from '../components/transaction/ProcessCart';

const Transaction = () => {
    const classes = useStyles();
    const checkLogin = () => {
        if(!isAuthenticated()){
            return <Redirect to='/signin' />
        }else{
            return false
        }
    }
    return (
        <Fragment>
            {checkLogin()}
            <CssBaseline />
            <Header/>
            <Container maxWidth="xl" >
                <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>Recomended Product</Paper>
                        <AprioriData/>
                        {/* <ProductList/> */}
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Paper className={classes.paper}>Proccess Order</Paper>
                        <ProcessCart/>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default Transaction;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        margin: 10,
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));
