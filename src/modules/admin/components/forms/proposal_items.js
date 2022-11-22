import React, { useState } from 'react';
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
import { TextField } from '@material-ui/core';

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

const ProposalItemsForm = (props) => {
  const { items, onChangeItems } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const changeAll = (obj) => {

    let list_items = [...items];
    list_items[obj.index] = obj.value;
    onChangeItems(list_items);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(items)
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // const [newTitle, setNewTitle] = React.useState();

  return (
    <div className={classes.root}>
      {
        items.length > 0 ?
          <>
            <AppBar position="static" color="default" style={{ borderRadius: 40, paddingLeft: 30, paddingRight: 30 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="on"
                aria-label="scrollable force tabs"
                centered
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
                      <div className="row">
                        <div className="col-md-12 col-12">
                          <TextField
                            fullWidth
                            label="Título da seção"
                            variant="filled"
                            autoComplete="text"
                            type="text"
                            value={item.title}
                            onChange={(ev) => { changeAll({ index, value: { ...item, title: ev.target.value } }) }}

                          />
                        </div>
                      </div>
                      <div className="text-lg mb-0">
                        <EditorJS holder={`tab_index${index}`} data={JSON.parse(item.description)} onChange={(val) => item.description = JSON.stringify(val)} />
                      </div>
                    </TabPanel>
                  )
                })
              }
            </SwipeableViews>
          </>
          : <></>
      }
    </div>
  );
}

export default ProposalItemsForm