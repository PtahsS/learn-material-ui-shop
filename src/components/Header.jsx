import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'
import React from 'react'

const Header = ({ handleCart, orderLen }) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    MUI Shop
                </Typography>
                <IconButton
                    onClick={handleCart}
                    color="inherit"
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header