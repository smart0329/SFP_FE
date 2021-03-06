// Copyright (c) 2019-present Smart.Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {isNil} from 'lodash';
import classNames from 'classnames';

import ConfirmModal from 'components/confirm_modal';
import MenuWrapper from 'components/widgets/menu/menu_wrapper';
import Menu from 'components/widgets/menu/menu';
import {localizeMessage} from 'utils/utils.jsx';
import GlobeIcon from 'components/widgets/icons/globe_icon';
import LockIcon from 'components/widgets/icons/lock_icon';

export default class GroupTeamsAndChannelsRow extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        hasChildren: PropTypes.bool,
        collapsed: PropTypes.bool,
        onRemoveItem: PropTypes.func.isRequired,
        onToggleCollapse: PropTypes.func.isRequired,
        onChangeRoles: PropTypes.func.isRequired,
        schemeAdmin: PropTypes.bool,
    }

    constructor(props) {
        super(props);
        this.state = {
            showConfirmationModal: false,
        };
    }

    removeItem = () => {
        this.props.onRemoveItem(this.props.id, this.props.type);
        this.setState({showConfirmationModal: false});
    }

    changeRoles = () => {
        this.props.onChangeRoles(this.props.id, this.props.type, !this.props.schemeAdmin);
    }

    toggleCollapse = () => {
        this.props.onToggleCollapse(this.props.id);
    }

    displayAssignedRolesDropdown = () => {
        const {schemeAdmin, name} = this.props;
        const channelAdmin = (
            <FormattedMessage
                id='admin.group_teams_and_channels_row.channelAdmin'
                defaultMessage='Channel Admin'
            />
        );
        const teamAdmin = (
            <FormattedMessage
                id='admin.group_teams_and_channels_row.teamAdmin'
                defaultMessage='Team Admin'
            />
        );
        const member = (
            <FormattedMessage
                id='admin.group_teams_and_channels_row.member'
                defaultMessage='Member'
            />
        );
        let dropDown = null;
        if (!isNil(schemeAdmin)) {
            let currentRole = member;
            let roleToBe = (this.props.type.includes('team')) ? teamAdmin : channelAdmin;
            if (schemeAdmin) {
                currentRole = (this.props.type.includes('team')) ? teamAdmin : channelAdmin;
                roleToBe = member;
            }
            dropDown = (
                <div >
                    <MenuWrapper>
                        <div data-testid={`${name}_current_role`}>
                            <a>
                                <span>{currentRole} </span>
                                <span className='caret'/>
                            </a>
                        </div>
                        <Menu
                            openLeft={true}
                            openUp={true}
                            ariaLabel={localizeMessage('admin.team_channel_settings.group_row.memberRole', 'Member Role')}
                        >
                            <Menu.ItemAction
                                testid={`${name}_role_to_be`}
                                onClick={this.changeRoles}
                                text={roleToBe}
                            />
                        </Menu>
                    </MenuWrapper>
                </div>
            );
        }

        return dropDown;
    }

    render = () => {
        let extraClasses = '';
        let arrowIcon = null;
        if (this.props.hasChildren) {
            arrowIcon = (
                <i
                    className={'fa ' + (this.props.collapsed ? 'fa-caret-right' : 'fa-caret-down')}
                    onClick={this.toggleCollapse}
                />
            );
            extraClasses += ' has-clidren';
        }

        if (this.props.collapsed) {
            extraClasses += ' collapsed';
        }

        let channelIcon = null;
        let typeText = null;
        switch (this.props.type) {
        case 'public-team':
            typeText = (
                <FormattedMessage
                    id='admin.group_settings.group_details.group_teams_and_channels_row.publicTeam'
                    defaultMessage='Team'
                />
            );
            break;
        case 'private-team':
            typeText = (
                <FormattedMessage
                    id='admin.group_settings.group_details.group_teams_and_channels_row.privateTeam'
                    defaultMessage='Team (Private)'
                />
            );
            break;
        }

        switch (this.props.type) {
        case 'public-channel':
            channelIcon = (
                <span className='channel-icon'>
                    <GlobeIcon className='icon icon__globe'/>
                </span>
            );
            typeText = (
                <FormattedMessage
                    id='admin.group_settings.group_details.group_teams_and_channels_row.publicChannel'
                    defaultMessage='Channel'
                />
            );
            break;
        case 'private-channel':
            channelIcon = (
                <span className='channel-icon'>
                    <LockIcon className='icon icon__lock'/>
                </span>
            );
            typeText = (
                <FormattedMessage
                    id='admin.group_settings.group_details.group_teams_and_channels_row.privateChannel'
                    defaultMessage='Channel (Private)'
                />
            );
            break;
        }

        const displayType = this.props.type.split('-')[1];

        return (
            <tr className={'group-teams-and-channels-row' + extraClasses}>
                <ConfirmModal
                    show={this.state.showConfirmationModal}
                    title={
                        <FormattedMessage
                            id='admin.group_settings.group_details.group_teams_and_channels_row.remove.confirm_header'
                            defaultMessage='Remove Membership from the {name} {displayType}?'
                            values={{name: this.props.name, displayType}}
                        />
                    }
                    message={
                        <FormattedMessage
                            id='admin.group_settings.group_details.group_teams_and_channels_row.remove.confirm_body'
                            defaultMessage='Removing this membership will prevent future users in this group from being added to the {name} {displayType}.'
                            values={{name: this.props.name, displayType}}
                        />
                    }
                    confirmButtonText={
                        <FormattedMessage
                            id='admin.group_settings.group_details.group_teams_and_channels_row.remove.confirm_button'
                            defaultMessage='Yes, Remove'
                        />
                    }
                    onConfirm={this.removeItem}
                    onCancel={() => this.setState({showConfirmationModal: false})}
                />
                <td>
                    <span className='arrow-icon'>
                        {arrowIcon}
                    </span>
                    {channelIcon}
                    <span className={classNames({'name-no-arrow': isNil(arrowIcon) && isNil(channelIcon)})}>
                        {this.props.name}
                    </span>
                </td>
                <td className='type'>
                    {typeText}
                </td>
                <td>
                    {this.displayAssignedRolesDropdown()}
                </td>
                <td className='text-right'>
                    <button
                        className='btn btn-link'
                        onClick={() => this.setState({showConfirmationModal: true})}
                    >
                        <FormattedMessage
                            id='admin.group_settings.group_details.group_teams_and_channels_row.remove'
                            defaultMessage='Remove'
                        />
                    </button>
                </td>
            </tr>
        );
    };
}
