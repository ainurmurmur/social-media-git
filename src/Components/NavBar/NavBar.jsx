import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


const NavBar = () => {

  return ( <div  className={classes.navBar}>
      <MenuList >
      <NavLink to='/profile' activeClassName={classes.active} id={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="medium" color='primary'/>
          </ListItemIcon>
          <Typography variant="h5">Profile</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/dialogs' activeClassName={classes.active} id={classes.link} >
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="medium" color='primary'/>
          </ListItemIcon>
          <Typography variant="h5" >Dialogs</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/users' activeClassName={classes.active} id={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <GroupAddIcon fontSize="medium" color='primary'/>
          </ListItemIcon>
          <Typography variant="h5" noWrap>
            Users
          </Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/news' activeClassName={classes.active} id={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <ReceiptIcon fontSize="medium" color='primary'/>
          </ListItemIcon>
          <Typography variant="h5" noWrap>
            News
          </Typography>
        </MenuItem>
        </NavLink>
      </MenuList>
    </div>
    );
}
export default NavBar;     

  {/* <ul>
               <li className={classes.item}><NavLink to='/profile' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={name} className={classes.navLogo} alt={'navIcon'}/>Profile</div></NavLink></li>
               <li className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={message} className={classes.navLogo} alt={'navIcon'}/>Dialogs</div></NavLink></li>
               <li className={classes.item}><NavLink to='/users' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={user} className={classes.navLogo} alt={'navIcon'}/>Users</div></NavLink></li>
               <li className={classes.item}><NavLink to='/news' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={news} className={classes.navLogo} alt={'navIcon'}/>News</div></NavLink></li>
           </ul> */}