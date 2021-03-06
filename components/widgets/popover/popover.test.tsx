// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import Popover from '.';

describe('components/widgets/popover', () => {
    test('plain', () => {
        const wrapper = shallow(
            <Popover id='test'>
                {'Some text'}
            </Popover>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
