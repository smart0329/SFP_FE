// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import {ChannelModes} from './channel_modes';

describe('admin_console/team_channel_settings/channel/ChannelModes', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(
            <ChannelModes
                onToggle={jest.fn()}
                isPublic={true}
                isSynced={false}
                isDefault={false}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
