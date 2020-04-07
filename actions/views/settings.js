// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ActionTypes} from 'utils/constants';

export function updateActiveSection(newActiveSection) {
    return {
        type: ActionTypes.UPDATE_ACTIVE_SECTION,
        data: newActiveSection,
    };
}