import React from 'react';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const CopyRight = () => {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    IqbalRevvin
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}

export default CopyRight;
