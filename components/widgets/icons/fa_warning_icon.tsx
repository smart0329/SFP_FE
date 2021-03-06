// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import LocalizedIcon from 'components/localized_icon';

import {t} from 'utils/i18n';

type Props = {
    additionalClassName: string | null;
}

export default class WarningIcon extends React.PureComponent<Props> {
    public static defaultProps: Props = {
        additionalClassName: null,
    };

    public render(): JSX.Element {
        const className = 'fa fa-warning' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
        return (
            <LocalizedIcon
                className={className}
                title={{id: t('generic_icons.warning'), defaultMessage: 'Warning Icon'}}
            />
        );
    }
}
