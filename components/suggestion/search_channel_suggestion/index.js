// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {connect} from 'react-redux';

import {getDirectTeammate} from 'utils/utils';

import SearchChannelSuggestion from './search_channel_suggestion';

const mapStateToProps = (state, ownProps) => {
    return {
        teammate: getDirectTeammate(state, ownProps.item.id),
    };
};

export default connect(mapStateToProps)(SearchChannelSuggestion);
