import React from 'react';
import WeatherTileFull from './WeatherTileFull';


export default class DetailsPage extends React.Component {
    render() {
        const { weatherObject } = this.props;
        const { cityId } = this.props.params;
        const { id, name, main, weather } = weatherObject.hasOwnProperty('list') && weatherObject.list.filter(({ id }) => id == cityId)[0];

        return (
            <div>
                {id ?
                    <WeatherTileFull id={id} city={name} temp={main.temp} icon={weather[0].icon} /> :
                    <span>'no data'</span>
                }
            </div>
        );
    }
}
