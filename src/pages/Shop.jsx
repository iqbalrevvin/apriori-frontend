import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Paper } from '@material-ui/core';
import Header from '../components/Header';
import ProductList from '../components/shop/ProductList';
import CartList from '../components/shop/CartList';


const Shop = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <Header/>
            <Container maxWidth="xl" >
                <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>List Product</Paper>
                        <ProductList/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Paper className={classes.paper}>Cart</Paper>
                        <CartList />
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default Shop;

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
