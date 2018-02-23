import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
// Colors
import { red } from 'material-ui/colors';

import { IntlProvider, FormattedMessage } from 'react-intl';


const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: red[800]
  },
  appBarContent: {
    color: red[50]
  },
  content: {
    margin: '20px 10px 0px 20px',
    padding: '10px 20px'
  }
};

class ErrorLayout extends Component {
  render() {
    const { classes, content, contentProps = {} } = this.props;
    const Content = content;

    const userLocale = 'en';
    const translationsForUsersLocale = {};

    return (
      <IntlProvider locale={ userLocale } messages={ translationsForUsersLocale }>
        <div className={ classes.root }>
          <Reboot />
          <AppBar position="static" className={ classes.appBar }>
            <Toolbar>
              <Typography variant="title" className={ classes.appBarContent }>
                <FormattedMessage id='error.title' defaultMessage='Error' />
              </Typography>
            </Toolbar>
          </AppBar>

          <Paper className={ classes.content } elevation={4}>
            <Content { ...contentProps } />
          </Paper>
        </div>
      </IntlProvider>
    );
  }
}


ErrorLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorLayout);
