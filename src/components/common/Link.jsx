import React from 'react';
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom"

const Link = (props) => {
    return (
        <MuiLink component={RouterLink} {...props} />
    );
}

export default Link;