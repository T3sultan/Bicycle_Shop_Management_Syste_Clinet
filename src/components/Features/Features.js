import { Grid } from '@mui/material';
import React from 'react';
import './Features.css'

const Features = ({ index }) => {
    const { img, name } = index;
    return (
        <Grid item xs={4} sm={4} md={4} >

            <img className="brandImage" src={img} alt="" />

        </Grid>
    );
};

export default Features;