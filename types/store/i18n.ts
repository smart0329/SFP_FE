// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export type I18nState = {
    translations: {
        [locale: string]: Translations;
    };
};

export type Translations = {
    [key: string]: string;
};
