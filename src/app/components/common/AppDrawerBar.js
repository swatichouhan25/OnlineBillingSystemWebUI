import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const drawerItem = [
  { id: 1, name: 'Home', route: 'home' },
  { id: 2, name: 'Generate Bill', route: 'bill' },
  { id: 3, name: ' Bill List', route: 'fetchCustomer' },
  { id: 4, name: 'Add Products', route: 'add-product' },
  { id: 5, name: ' Recent Sell Out', route: 'fetch' },
  { id: 6, name: ' Product Stock', route: 'productInventoryFetch' }
];

const adminData = [
  // {id: 2, name: 'Generate Bill', route: "bill"},
  // {id: 3, name: 'Add Products', route: "add-product"},
  // {id: 4, name: 'Products', route: "product"},
  { id: 1, name: 'Manage User' },
  { id: 2, name: 'Register User', route: 'register' },
  { id: 3, name: 'Edit User', route: 'fetchByEmpId' },
  { id: 4, name: 'Show Report', route: '' },
  // { id: 5, name: 'About Us', route: '' }
];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function PersistentDrawerLeft({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  //   const { url } = useRouteMatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
              sx={{ mr: 2, ...(open && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Smart Billing
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          variant="persistent"
          anchor="left"
          open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {drawerItem.map((item, index) => (
              // <ListItem key={text} disablePadding>
              <ListItem key={item.id} component={Link} to={'/' + item.route}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <ReceiptLongIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {adminData.map((item, index) => (
              <ListItem key={item.id} component={Link} to={'/' + item.route}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <ReceiptLongIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main> */}
    </div>
  );
}
