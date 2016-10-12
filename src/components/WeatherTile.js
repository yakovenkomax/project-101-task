import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import WeatherIcon from './WeatherIcon';
import styles from './weathertile.css';


export default class WeatherTile extends React.Component {
    render() {
        const { id, city, temp, icon } = this.props;
        const tempUnit = 'C';
        const sign = (temp < 0) ? '-' : '+';
        const unsignedTemp = (temp < 0) ? Math.abs(temp) : temp;
        const unsignedRoundedTemp = Math.round(unsignedTemp);

        return (
            <li className={styles['root']}>
                <div className={styles['body']}>
                    <Link className={styles['link']} to={`/cities/${id}`}>
                        <div className={styles['city-name']}>{city}</div>
                        <div className={styles['temperature']}>
                            <span className={styles['temperature-sign']}>{sign}</span>
                            <span className={styles['temperature-value']}>{unsignedRoundedTemp}</span>
                            <span className={styles['temperature-unit']}>&deg;{tempUnit}</span>
                        </div>
                        <WeatherIcon icon={icon}/>
                    </Link>
                </div>
            </li>
        );
    }
}
