import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import Icon from './Icon';
import styles from './header.css';


export default class Header extends React.Component {
    render() {
        return (
            <div className={styles['root']}>
                <Link to={`/cities`} className={styles['logo']}>
                    <Icon type="logo"/>
                    <span className={styles['logo-text']}>Stormglass</span>
                </Link>
                <div className={styles['actions']}>
                    <button className={styles['button']} onClick={this.props.refresh}>
                        <Icon type="refresh"/>
                        <span className={styles['button-text']}>Refresh</span>
                    </button>
                    <button className={styles['button']}>
                        <Icon type="add"/>
                        <span className={styles['button-text']}>Add</span>
                    </button>
                </div>
            </div>
        );
    }
}
