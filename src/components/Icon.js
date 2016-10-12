import React from 'react';
import classNames from 'classnames';
import styles from './icon.css';

import add from '../static/icons/add.svg';
import edit from '../static/icons/edit.svg';
import logo from '../static/icons/logo.svg';
import menu from '../static/icons/menu.svg';
import no from '../static/icons/no.svg';
import refresh from '../static/icons/refresh.svg';
import settings from '../static/icons/settings.svg';
import yes from '../static/icons/yes.svg';


export default class Icon extends React.Component {
    render() {
        const icons = { add, edit, logo, menu, no, refresh, settings, yes }
        const { type } = this.props;

        function inlineSVG() { return {__html: icons[type] }; }

        return (
            <i className={classNames(styles['root'], styles[this.props.type])} dangerouslySetInnerHTML={inlineSVG()}></i>
        );
    }
}
