import React from 'react';
import classNames from 'classnames';
import styles from './weathericon.css';

import clear from '../static/weather-icons/clear.svg';
import clear_n from '../static/weather-icons/clear_n.svg';
import clouds_few from '../static/weather-icons/clouds_few.svg';
import clouds_few_n from '../static/weather-icons/clouds_few_n.svg';
import clouds from '../static/weather-icons/clouds.svg';
import shower from '../static/weather-icons/shower.svg';
import rain from '../static/weather-icons/rain.svg';
import rain_n from '../static/weather-icons/rain_n.svg';
import thunderstorm from '../static/weather-icons/thunderstorm.svg';
import thunderstorm_n from '../static/weather-icons/thunderstorm_n.svg';
import snow from '../static/weather-icons/snow.svg';
import snow_n from '../static/weather-icons/snow_n.svg';
import mist from '../static/weather-icons/mist.svg';
import mist_n from '../static/weather-icons/mist_n.svg';
import weathercock from '../static/weather-icons/weathercock.svg';


export default class WeatherIcon extends React.Component {
    render() {
        const weatherIcons = { clear, clear_n, clouds_few, clouds_few_n, clouds, shower, rain, rain_n, thunderstorm, thunderstorm_n, snow, snow_n, mist, mist_n, weathercock }
        const { icon } = this.props;
        const iconMap = {
            '01d': 'clear',
            '01n': 'clear_n',
            '02d': 'clouds_few',
            '02n': 'clouds_few_n',
            '03d': 'clouds',
            '03n': 'clouds',
            '04d': 'clouds',
            '04n': 'clouds',
            '09d': 'shower',
            '09n': 'shower',
            '10d': 'rain',
            '10n': 'rain_n',
            '11d': 'thunderstorm',
            '11n': 'thunderstorm_n',
            '13d': 'snow',
            '13n': 'snow_n',
            '50d': 'mist',
            '50n': 'mist_n',
            'unknown': 'weathercock'
        }

        function inlineSVG() {
            return {__html: (iconMap.hasOwnProperty(icon)) ? weatherIcons[iconMap[icon]] : weatherIcons[iconMap['unknown']]};
        }

        return (
            <i className={classNames(styles['root'], styles[this.props.icon])} dangerouslySetInnerHTML={inlineSVG()}></i>
        );
    }
}
