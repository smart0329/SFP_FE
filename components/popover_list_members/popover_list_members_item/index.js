// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {connect} from 'react-redux';

import {getDisplayNameByUser} from 'utils/utils.jsx';

import PopoverListMembersItem from './popover_list_members_item.jsx';

function mapStateToProps(state, ownProps) {
    return {
        displayName: getDisplayNameByUser(state, ownProps.user),
    };
}

export default connect(mapStateToProps)(PopoverListMembersItem);
