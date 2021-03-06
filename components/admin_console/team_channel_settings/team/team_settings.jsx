// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import {t} from 'utils/i18n';
import TeamList from 'components/admin_console/team_channel_settings/team/list';
import AdminPanel from 'components/widgets/admin_console/admin_panel';

export function TeamsSettings(props) {
    return (
        <div className='wrapper--fixed'>
            <div className='admin-console__header'>
                <FormattedMessage
                    id='admin.team_settings.groupsPageTitle'
                    defaultMessage='{siteName} Teams'
                    values={{siteName: props.siteName}}
                />
            </div>

            <div className='admin-console__wrapper'>
                <div className='admin-console__content'>
                    <AdminPanel
                        id='teams'
                        titleId={t('admin.team_settings.title')}
                        titleDefault='Teams'
                        subtitleId={t('admin.team_settings.description')}
                        subtitleDefault='Manage team settings.'
                    >
                        <TeamList/>
                    </AdminPanel>
                </div>
            </div>
        </div>
    );
}

TeamsSettings.propTypes = {
    siteName: PropTypes.string.isRequired,
};
