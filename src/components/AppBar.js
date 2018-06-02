import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// components
import SideList from './SideList';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerPaper: {
    height: '100%',
    color: '#fff',
    backgroundColor: 'var(--grey)',
    width: '200px'
  },
}

class AppBarComponent extends Component {
  state = {
    isDrawerVisible: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      isDrawerVisible: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.isDrawerVisible}
          onClose={this.toggleDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SideList toggleDrawer={this.toggleDrawer} />
        </Drawer>
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarComponent);
