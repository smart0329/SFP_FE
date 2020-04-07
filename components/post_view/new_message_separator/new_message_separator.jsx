// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import NotificationSeparator from 'components/widgets/separator/notification-separator';

export default class NewMessageSeparator extends React.PureComponent {
    static propTypes = {
        separatorId: PropTypes.string.isRequired,
    }

    render() {
        return (
            <NotificationSeparator id={this.props.separatorId}>
                <FormattedMessage
                    id='posts_view.newMsg'
                    defaultMessage='New Messages'
                />

            </NotificationSeparator>
        );
    }
}
