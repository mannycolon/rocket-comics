import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarIcon from '@material-ui/icons/Star';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  list: {
    width: 200,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toolbar: theme.mixins.toolbar,
  topDrawerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#252627'
  },
  arrowBackButton: {
    color: '#fff'
  },
  topList: {
    padding: '10px'
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)'
  },
  listItem: {
    cursor: 'pointer'
  },
  listItemContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  greyListItem: {
    color: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: '10px',
    cursor: 'pointer'
  }
});

class SideList extends Component {
  render () {
    const { classes, toggleDrawer } = this.props;

    return (
      <div className={classes.list}>
        <div>
          <div className={`${classes.toolbar} ${classes.topDrawerContainer}`}>
            <IconButton className={classes.arrowBackButton} onClick={toggleDrawer(false)}>
              <ArrowBackIcon />
            </IconButton>
          </div>
          <div className={classes.topList}>
            <List className={classes.greyListItem}>Discover</List>
            <Divider className={classes.divider} />
            <List className={classes.listItem}>
              <div className={classes.listItemContent}>
                <StarIcon />
                <div style={{ paddingLeft: '20px' }}>Featured</div>
              </div>
            </List>
            <List className={classes.greyListItem}>Library</List>
            <Divider className={classes.divider} />
            <List className={classes.listItem}>
              <div className={classes.listItemContent}>
                <ListIcon />
                <div style={{ paddingLeft: '20px' }}>Smart Lists</div>
              </div>
            </List>
            <List className={classes.listItem}>
              <div className={classes.listItemContent}>
                <LibraryBooks />
                <div style={{ paddingLeft: '20px' }}>My Books</div>
              </div>
            </List>
          </div>
        </div>
        <div>
          <Divider className={classes.divider} />
          <List className={classes.greyListItem}>MY ACCOUNT</List>
          <Divider className={classes.divider} />
          <List className={classes.greyListItem}>FEEDBACK</List>
          <Divider className={classes.divider} />
          <List className={classes.greyListItem}>ABOUT</List>
        </div>
      </div>
    )
  }
}

SideList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideList);
