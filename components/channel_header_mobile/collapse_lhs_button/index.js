// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {toggle as toggleLhs} from 'actions/views/lhs';

import CollapseLhsButton from './collapse_lhs_button';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        toggleLhs,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(CollapseLhsButton);

