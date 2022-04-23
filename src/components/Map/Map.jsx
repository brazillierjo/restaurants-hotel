import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Rating } from '@mui/material';

import useStyles from './styles'

export default function Map() {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = { lat: 43.7101728, lng: 7.2619532 }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}>

            </GoogleMapReact>
        </div>
    )
}
