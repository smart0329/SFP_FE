// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChannelMember, getChannelMember, autocompleteChannelsForSearch} from 'mattermost-redux/actions/channels';
import {getChannelMembersInChannels} from 'mattermost-redux/selectors/entities/channels';

import AddUserToChannelModal from './add_user_to_channel_modal.jsx';

function mapStateToProps(state) {
    const channelMembers = getChannelMembersInChannels(state) || {};
    return {
        channelMembers,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            addChannelMember,
            getChannelMember,
            autocompleteChannelsForSearch,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserToChannelModal);
