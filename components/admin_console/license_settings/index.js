// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLicenseConfig} from 'mattermost-redux/actions/general';
import {uploadLicense, removeLicense} from 'mattermost-redux/actions/admin';

import LicenseSettings from './license_settings.jsx';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getLicenseConfig,
            uploadLicense,
            removeLicense,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(LicenseSettings);
