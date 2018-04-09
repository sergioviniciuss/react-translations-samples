import React, { Component, PropTypes } from 'react';
import Cookie from 'js-cookie';
import {
  defineMessages,
} from 'react-intl';

const propTypes = {
    intl: PropTypes.object.isRequired,
};

const messages = defineMessages({
  btnLabel: {
    id: "localebutton.label",
    defaultMessage:
      "change to"
  }
});

class LocaleButton extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        Cookie.set('locale', this.props.intl.locale === 'en' ? 'de' : 'en');
        window.location.reload();
    }
    render() {
        return <button onClick={this.handleClick}>
            {this.props.intl.formatMessage(messages.btnLabel)} {this.props.intl.locale === "en" ? "German" : "English"}
          </button>;
    }
}
LocaleButton.propTypes = propTypes;

export default LocaleButton;