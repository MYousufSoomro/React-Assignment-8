import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dashboard from '@material-ui/icons/Dashboard';
import People from '@material-ui/icons/People';
import Category from '@material-ui/icons/Category';
import Typography from '@material-ui/core/Typography';
import Table from './Table';
import Forces from '../Forces';
import Crimes from '../Crimes'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Dashboard" icon={<Dashboard />} />
          <Tab label="Forces" icon={<People />} />
          <Tab label="Crime Categories" icon={<Category />} />s
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
          <Table />
      </TabContainer>}
      {value === 1 && <TabContainer>
        <Forces />
      </TabContainer>}
      {value === 2 && <TabContainer>
        <Crimes />
      </TabContainer>}
    </div>
  );
}

export default ScrollableTabsButtonForce;