// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const axios = require('axios');

module.exports = async ({url, method}) => {
    let response;
    try {
        response = await axios({url, method});
        return {data: response.data, status: response.status, success: true};
    } catch (err) {
        return {success: false, errorCode: err.code};
    }
};
