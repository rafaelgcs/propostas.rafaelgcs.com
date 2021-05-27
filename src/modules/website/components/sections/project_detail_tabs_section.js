import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditorJS from "../../../shared/components/editor_js";
import { json } from 'body-parser';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const ProjectDetailTabsSection = (props) => {
  const { items } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ borderRadius: 40, paddingLeft: 30, paddingRight: 30 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {
            items.map((item, index) => {
              return (
                <Tab key={`TAB__${index}`} label={item.title} {...a11yProps(index)} />
              )
            })
          }
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {
          items.map((item, index) => {
            return (
              <TabPanel key={`PANEL__${index}`} value={value} index={index} dir={theme.direction}>
                <div className="text-lg mb-0">
                  <EditorJS holder={`tab_index${index}`} data={JSON.parse(item.description)} onChange={(val) => console.log(val)} />
                </div>
              </TabPanel>
            )
          })
        }
      </SwipeableViews>
    </div>
  );
}

export default ProjectDetailTabsSection