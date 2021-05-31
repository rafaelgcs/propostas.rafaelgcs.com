import React from 'react';
import { makeStyles, Tooltip } from '@material-ui/core';

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

const BootstrapTooltip = (props) => {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

export default BootstrapTooltip
