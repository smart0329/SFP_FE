// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendPasswordResetEmail} from 'mattermost-redux/actions/users';

import PasswordResetSendLink from './password_reset_send_link';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        sendPasswordResetEmail,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(PasswordResetSendLink);
