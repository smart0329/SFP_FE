// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import SearchSuggestionList from 'components/suggestion/search_suggestion_list.jsx';

describe('components/SearchSuggestionList', () => {
    const baseProps = {
        open: true,
        onCompleteWord: jest.fn(),
        pretext: '',
        cleared: false,
        matchedPretext: [],
        items: [],
        terms: [],
        selection: '',
        components: [],
        onItemHover: jest.fn(),
    };

    test('should not throw error when currentLabel is null and label is generated', () => {
        const wrapper = shallow(
            <SearchSuggestionList
                {...baseProps}
                ariaLiveRef={React.createRef()}
            />
        );

        const instance = wrapper.instance();
        instance.currentLabel = null;

        instance.generateLabel({});
    });
});
