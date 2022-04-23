import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

export default function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    getPlacesData()
      .then(data => {
        setPlaces(data)
        console.log(data)
      })
  }, [])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} sm={4}><List /></Grid>
        <Grid item xs={12} sm={8}><Map /></Grid>
      </Grid>
    </>
  )
}