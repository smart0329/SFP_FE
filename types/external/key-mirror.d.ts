
// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.
declare module 'key-mirror' {
    function KeyMirror<T>(obj: T): { [K in keyof T]: K };
    export = KeyMirror;
}

