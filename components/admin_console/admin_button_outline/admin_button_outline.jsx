// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

import './admin_button_outline.scss';

export default class AdminButtonOutline extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string.isRequired,
    }
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={'AdminButtonOutline btn btn-primary'}
            >
                {this.props.children}
            </button>
        );
    }
}