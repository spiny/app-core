import React, { Component } from 'react';
// MUI
import { withStyles } from 'material-ui/styles';

import { FormattedMessage } from 'react-intl';


const styles = {

};


class UnauthorizedError extends Component {
  render() {
    return (
      <div>
        <FormattedMessage id='error.message.unauthorized' defaultMessage='Unauthorized' />
      </div>
    );
  }
}



export default withStyles(styles)(UnauthorizedError);
