import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI
import Reboot from 'material-ui/Reboot';

import { IntlProvider } from 'react-intl';


class BlankLayout extends Component {

  renderContent() {
    const { content, contentProps = {} } = this.props;
    const Content = content;

    return (
      <Content { ...contentProps } />
    )
  }

  render() {
    const userLocale = 'en';
    const translationsForUsersLocale = {};

    return (
      <IntlProvider locale={ userLocale } messages={ translationsForUsersLocale }>
        <div className="page">
          <Reboot />
          { this.renderContent() }
        </div>
      </IntlProvider>
    );
  }
}


export default BlankLayout;
