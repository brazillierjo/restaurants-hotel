import React from 'react'
import { AutoComplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'

import useStyles from './styles'

export default function Header() {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Bientôt en voyage ! ✈️
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explorer de nouveaux endroits :
                    </Typography>
                    {/* <AutoComplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Rechercher...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    {/* </AutoComplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
