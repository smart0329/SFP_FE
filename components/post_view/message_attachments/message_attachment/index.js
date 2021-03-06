// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {doPostActionWithCookie} from 'mattermost-redux/actions/posts';
import {getCurrentRelativeTeamUrl} from 'mattermost-redux/selectors/entities/teams';

import MessageAttachment from './message_attachment';

function mapStateToProps(state) {
    return {
        getCurrentRelativeTeamUrl: getCurrentRelativeTeamUrl(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            doPostActionWithCookie,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageAttachment);
