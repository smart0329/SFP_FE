// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {render} from '@testing-library/react';
import {IntlProvider} from 'react-intl';

export const renderWithIntl = (component, locale = 'en') => {
    return render(<IntlProvider locale={locale}>{component}</IntlProvider>);
};
