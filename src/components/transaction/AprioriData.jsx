import React, {useContext, useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import {Link, withRouter} from 'react-router-dom';
import {Context as TransactionContext} from '../../services/context/TransactionContext'

const useStyles = makeStyles({
    table: {
        minWidth: 600,
        maxHeight: 140,
    },
});

const AprioriData = () => {
    const classes = useStyles();
    const {state, getAprioriData, unGetAprioriData} = useContext(TransactionContext)
    useEffect(() => {
        getAprioriData()
        return () => {
            unGetAprioriData()
        }
    },[])
    const showLoading = () => (
        state.loading && (
            <Fragment>
                Load a priori analysis......                 
                <Skeleton />
                <Skeleton animation={false} />
                <Skeleton animation="wave" />
                <LinearProgress style={{ top: 60,  alignItems: 'center', }}/>
                
            </Fragment>
        )
    )
    return (
        <Fragment>
            {showLoading()}
            <TableContainer component={Paper}>     
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="center">Antecedent</TableCell>
                            <TableCell align="center">Consequent</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Confidence</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {state.data.map((apriori, i) => ( 
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {i+1}
                                </TableCell>
                                <TableCell align="center">{apriori.antecedent+','}</TableCell>
                                <TableCell align="center">{apriori.consequent}</TableCell>
                                <TableCell align="center">{Math.floor(apriori.support*100)}</TableCell>
                                <TableCell align="center">{Math.floor(apriori.confidence*100)}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default AprioriData