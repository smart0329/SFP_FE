// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {makeGetUsersTypingByChannelAndPost} from 'mattermost-redux/selectors/entities/typing';

import {GlobalState} from 'types/store';

import MsgTyping from './msg_typing';

type Props = {
    channelId: string;
    postId: string;
};

function makeMapStateToProps() {
    const getUsersTypingByChannelAndPost = makeGetUsersTypingByChannelAndPost();

    return function mapStateToProps(state: GlobalState, ownProps: Props) {
        const typingUsers = getUsersTypingByChannelAndPost(state, {channelId: ownProps.channelId, postId: ownProps.postId});

        return {
            typingUsers,
        };
    };
}

export default connect(makeMapStateToProps)(MsgTyping);
