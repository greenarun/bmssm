import React from 'react'
import { Box, Divider, Toolbar, Typography, ListItemText, IconButton, List, CssBaseline, ListItem } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { MenuTwoTone, ChevronLeftTwoTone, ChevronRightTwoTone, InboxTwoTone, EventNoteTwoTone, AutoStoriesTwoTone, ContactsTwoTone, Brightness5TwoTone, HomeTwoTone } from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeBody from '../HomeBody/HomeBody.component'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 240;

const MenuLink = [
    { text: "Home", icon: "HomeTwoTone", index: 0 },
    { text: "Events", icon: "EventNoteTwoTone", index: 1 },
    { text: "Awards", icon: "Brightness5TwoTone", index: 2 },
    { text: "About us", icon: "ContactsTwoTone", index: 3 },
    { text: "Contact us", icon: "AutoStoriesTwoTone", index: 4 },

]

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),

        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),

        }),
        '.MuiDrawer-paper': {
            backgroundColor: "#ddd",
        }
    }),
);




const Home = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenuIcon = (index) => {
        switch (index) {
            case 0:
                return <HomeTwoTone />;
            case 1:
                return <EventNoteTwoTone />;
            case 2:
                return <Brightness5TwoTone />
            case 3:
                return <ContactsTwoTone />
            case 4:
                return <AutoStoriesTwoTone />
            case 5:
                return <InboxTwoTone />
            default:
                return <HomeTwoTone />;
        }
    }


    return (<>
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuTwoTone />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            BMSSM - Bharatha Makkal Samuga Sevai Maiyam
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftTwoTone /> : <ChevronRightTwoTone />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {MenuLink.slice(0, 3).map((menu) => (
                            <ListItem button key={menu.text}>
                                <ListItemIcon>
                                    {handleMenuIcon(menu.index)}
                                </ListItemIcon>
                                <ListItemText primary={menu.text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {MenuLink.slice(3, MenuLink.length).map((menu) => (
                            <ListItem button key={menu.text}>
                                <ListItemIcon>
                                    {handleMenuIcon(menu.index)}
                                </ListItemIcon>
                                <ListItemText primary={menu.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <HomeBody />
                </Box>
            </Box>

        </div>
    </>)

}

export default Home