import React from 'react';
import { Link } from 'react-router';
import WeatherTile from './WeatherTile';


export default class IndexPage extends React.Component {
    render() {
        const { weatherObject } = this.props;

        return (
            <ul>
                {weatherObject.hasOwnProperty('list') && weatherObject.list.length ?
                    weatherObject.list.map(({id, name, main, weather}) => {
                        return <WeatherTile key={id} id={id} city={name} temp={main.temp} icon={weather[0].icon} />
                    }) :
                <li><span>'no data'</span></li>}
            </ul>
        );
    }
}
