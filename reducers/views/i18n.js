// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';

import {ActionTypes} from 'utils/constants';

function translations(state = {}, action) {
    switch (action.type) {
    case ActionTypes.RECEIVED_TRANSLATIONS:
        return {
            ...state,
            [action.data.locale]: action.data.translations,
        };

    default:
        return state;
    }
}

export default combineReducers({
    translations,
});
