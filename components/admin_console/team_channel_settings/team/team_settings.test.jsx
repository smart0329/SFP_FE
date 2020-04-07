// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import {TeamsSettings} from './team_settings.jsx';

describe('admin_console/team_channel_settings/team/TeamSettings', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(
            <TeamsSettings
                siteName='site'
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
