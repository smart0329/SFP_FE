// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getCurrentUserId, getUser} from 'mattermost-redux/selectors/entities/users';

import {GlobalState} from 'types/store';

import RemovedFromChannelModal from './removed_from_channel_modal';

type Props = {
    removerId: string;
}

function mapStateToProps(state: GlobalState, ownProps: Props) {
    const remover = getUser(state, ownProps.removerId);
    return {
        currentUserId: getCurrentUserId(state),
        remover: remover && remover.username,
    };
}

export default connect(mapStateToProps)(RemovedFromChannelModal);
