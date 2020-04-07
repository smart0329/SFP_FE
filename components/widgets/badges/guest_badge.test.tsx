// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import GuestBadge from './guest_badge';

describe('components/widgets/badges/GuestBadge', () => {
    test('should match the snapshot', () => {
        const wrapper = shallow(
            <GuestBadge className={'test'}/>
        );
        expect(wrapper).toMatchInlineSnapshot(`
<Badge
  className="GuestBadge test"
  show={true}
>
  <FormattedMessage
    defaultMessage="GUEST"
    id="post_info.guest"
    values={Object {}}
  />
</Badge>
`);
    });
});
