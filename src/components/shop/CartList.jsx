import React, {Fragment, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Context as CartContext} from '../../services/context/CartContext'
import {
    Typography,
    List,
    ListItem,
    Divider,
    ListItemText,
    Button,
} from '@material-ui/core';

const CartList = () => {
    const {state, addCart, deleteCart} = useContext(CartContext)

    const classes = useStyles();
    return (
        <Fragment>
            {
                state.length > 0 && (
                    <Button variant="contained" color="primary">
                        {state.length} Order Process
                    </Button>
                )
            }
            {
                state.length == 0 && (
                    <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                        Please choose food
                    </Typography>
                )
            }
            {state.map((cart, i) => ( 
                <List className={classes.root}>
                    <ListItem alignItems="flex-start" style={{ backgroundColor: 'white', }}>
                        <img src={`http://lorempixel.com/75/50/food/${cart.id}`} style={{ marginTop: 10, marginRight: 10 }} />
                        <ListItemText primary={cart.title}
                        secondary={
                            <React.Fragment>
                                <Divider/>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    <Button size="small" color="secondary" onClick={() => deleteCart(cart.id)}>
                                        Hapus {cart.title}
                                    </Button>
                                </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            ))}
        </Fragment>
    );
}

export default CartList;

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: '500px',
    
    },
    inline: {
        display: 'inline',
    },
    }));
