import React, { Component } from 'react';
// MUI
import { withStyles } from 'material-ui/styles';

import { FormattedMessage } from 'react-intl';


const styles = {

};


class NotFoundError extends Component {
  render() {
    return (
      <div>
        <FormattedMessage id='error.message.notFound' defaultMessage='Not found' />
      </div>
    );
  }
}



export default withStyles(styles)(NotFoundError);
