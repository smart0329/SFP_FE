// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getEmojiImageUrl} from 'mattermost-redux/utils/emoji_utils';

import {getEmojiMap} from 'selectors/emojis';

import {GlobalState} from 'types/store';

import PostEmoji from './post_emoji';

type Props = {
    name: string;
};

function mapStateToProps(state: GlobalState, ownProps: Props) {
    const emojiMap = getEmojiMap(state);
    const emoji = emojiMap.get(ownProps.name);

    return {
        imageUrl: emoji ? getEmojiImageUrl(emoji) : '',
    };
}

export default connect(mapStateToProps)(PostEmoji);
