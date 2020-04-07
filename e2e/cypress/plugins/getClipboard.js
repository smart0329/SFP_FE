// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const clipboardy = require('clipboardy');

module.exports = async () => {
    return clipboardy.readSync();
};
