import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './ExclusiveFeatures.css'

import features1 from '../../images/features/11.jpg'
import features2 from '../../images/features/22.jpg'
import features3 from '../../images/features/33.jpg'
import features4 from '../../images/features/44.jpg'
import features5 from '../../images/features/55.jpg'
import features6 from '../../images/features/66.jpg'
import features7 from '../../images/features/111.jpg'
import features8 from '../../images/features/222.jpg'
import features9 from '../../images/features/666.jpg'
import features10 from '../../images/features/444.jpg'
import features11 from '../../images/features/555.jpg'
import features12 from '../../images/features/666.jpg'
import features13 from '../../images/features/765.jpg'
import features14 from '../../images/features/777.jpg'
import features15 from '../../images/features/888.jpg'
import features16 from '../../images/features/999.jpg'
import features17 from '../../images/features/121.jpg'
import features18 from '../../images/features/132.jpg'




import Features from '../Features/Features';




const features = [
    {
        img: features1,
        name: "Role Permission"


    },
    {
        img: features2,
        name: "Multiple Languages"

    },
    {
        img: features3,
        name: "Payroll System"

    },
    {
        img: features4,
        name: "Multiple Payment Gateway"

    },
    {
        img: features5,
        name: "Email Configuration"

    },
    {
        img: features6,
        name: "Payment Setup"

    },
    {
        img: features7,
        name: "SMS Configuration"

    },
    {
        img: features8,
        name: "Fully Responsive"

    },
    {
        img: features9,
        name: "Secured System"

    },
    {
        img: features10,
        name: "Online/Offline Booking System"

    }, {
        img: features11,
        name: "SMS Configuration"

    },
    {
        img: features12,
        name: "Fully Responsive"

    },
    {
        img: features13,
        name: "Secured System"

    },
    {
        img: features14,
        name: "Online/Offline Booking System"

    },
    {
        img: features15,
        name: "Secured System"

    },
    {
        img: features16,
        name: "Online/Offline Booking System"

    },
    {
        img: features17,
        name: "Secured System"

    },
    {
        img: features18,
        name: "Online/Offline Booking System"

    },
]

const ExclusiveFeatures = () => {
    return (
        <div id="brands" className="container1 mt-5">
            <Box sx={{ flexGrow: 1 }}>
                <h2 style={{ color: "#311b92", fontWeight: "bold" }}>Bicycle Brands</h2>
                <Grid container spacing={{ xs: 3, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {features.map((index) => <Features
                        key={index.img}
                        index={index}
                    >

                    </Features>)}
                </Grid>
            </Box>

        </div>
    );
};

export default ExclusiveFeatures;