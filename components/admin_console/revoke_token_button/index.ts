// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {revokeUserAccessToken} from 'mattermost-redux/actions/users';
import {GenericAction} from 'mattermost-redux/types/actions';

import RevokeTokenButton from './revoke_token_button';

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators({
            revokeUserAccessToken,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(RevokeTokenButton);
