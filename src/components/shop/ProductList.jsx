import React, {Fragment, useContext, useEffect} from 'react';
import {Context as ProductContext} from '../../services/context/ProductContext'
import {Context as CartContext} from '../../services/context/CartContext'
import { makeStyles } from '@material-ui/core/styles';
import {
    GridList, 
    GridListTile, 
    Card, 
    CardActions,
    CardActionArea, 
    CardMedia ,
    CardContent,
    Typography,
    Button,
} from '@material-ui/core';

const ProductList = () => {
    const {state, getListProduct} = useContext(ProductContext)
    const {state:data, addCart} = useContext(CartContext)
    const classes = useStyles();

    useEffect(() => {
        getListProduct()
        return () => {
            
        }
    },[])

    const handleAddCart = (id, title) => {
        
        let dataCart = data.filter((food)=> food.id === id)
        if(dataCart.length > 0){
            alert('Sudah Tersedia')
        }else{
            addCart(id, title)
        }
        // alert(dataCart.length)
        
    }
    return (
        <Fragment>
            {/* {JSON.stringify(data)} */}
            <GridList cellHeight={350} className={classes.gridList} cols={3}>
                {state.data.map((product, i) => ( 
                    <GridListTile key={i} cols={1}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image={`http://lorempixel.com/400/200/food/${product.id}`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.produk_name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {
                                    data.filter((food)=> food.id === product.id).length > 0 && (
                                        <Button size="small" color="primary" disabled>Dipesan</Button>
                                    )
                                }
                                {
                                    data.filter((food)=> food.id === product.id).length < 1 && (
                                        <Button size="small" color="primary"
                                            onClick={() => handleAddCart(product.id, product.produk_name)}>
                                            Pesan {product.produk_name}
                                        </Button>
                                    )
                                }
                                
                                {/* <Button size="small" color="primary">
                                Learn More
                                </Button> */}
                            </CardActions>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </Fragment>
    );
}

export default ProductList;

const useStyles = makeStyles((theme) => ({
    gridList: {
        height: 736,
    },
}));
