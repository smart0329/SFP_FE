// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export function makeAsyncComponent(LazyComponent) {
    return (props) => (
        <React.Suspense fallback={null}>
            <LazyComponent {...props}/>
        </React.Suspense>
    );
}
