// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export const getLastPostsApiTimeForChannel = (state, channelId) => state.views.channel.lastGetPosts[channelId];
export const getToastStatus = (state) => state.views.channel.toastStatus;
