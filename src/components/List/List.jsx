import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

export default function List() {
    const classes = useStyles()
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState([])

    const places = [
        { name: 'Endroits cools' },
        { name: 'Bières au top' },
        { name: 'Pizzas qui déchires' },
        { name: 'Endroits cools' },
        { name: 'Bières au top' },
        { name: 'Pizzas qui déchires' },
        { name: 'Endroits cools' },
        { name: 'Bières au top' },
        { name: 'Pizzas qui déchires' },
    ]

    return (
        <div className={classes.container}>
            <Typography variant='h4'>
                Restaurants, Hôtels et Attractions autour de vous
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hôtels</MenuItem>
                    <MenuItem value='attraction'>Attraction</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Notes</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>Tous</MenuItem>
                    <MenuItem value={3}>+ de 3 ⭐️</MenuItem>
                    <MenuItem value={4}>+ de 4 ⭐️</MenuItem>
                    <MenuItem value={4.5}>+ de 4,5 ⭐️</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item xs={12} key={i}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
