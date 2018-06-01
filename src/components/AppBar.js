import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
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
  arrowBackButton: {
    color: '#fff'
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  drawerPaper: {
    width: '200px',
  },
  toolbar: theme.mixins.toolbar,
  topDrawerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});

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

    const sideList = (
      <div className={classes.list}>
        <div className={`${classes.toolbar} ${classes.topDrawerContainer}`} style={{ backgroundColor: 'var(--dark-grey)' }}>
          <IconButton className={classes.arrowBackButton} onClick={this.toggleDrawer(false)}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <List>{'mailFolderListItems'}</List>
        <Divider />
        <List>{'otherMailFolderListItems'}</List>
      </div>
    );

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
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarComponent);
