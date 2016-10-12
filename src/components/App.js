import React from 'react';
import Header from './Header';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityIdArray: props.initialCityIdArray,
            weatherObject: props.initialWeatherObject
        };
    }

    componentDidMount() {
        this._getCityList();
        this._getWeather();
    }

    _getCityList() {
        const LS_CITY_ARRAY = 'sg_city-array';

        if (localStorage.hasOwnProperty(LS_CITY_ARRAY)) {
            this.setState({cityIdArray: localStorage.getItem(LS_CITY_ARRAY).split(',')});
            console.log(`Get city ID list from Local Storage: ${localStorage.getItem(LS_CITY_ARRAY).split(',')}`);
        } else {
            localStorage.setItem(LS_CITY_ARRAY, this.state.cityIdArray);
            console.log(`No city IDs found in Local Storage. Saving default values to Local storage: ${this.state.cityIdArray}`);
        }
    }

    _getWeather() {
        const API_KEY = 'f11a4da4adc9204d049e2d44d772995f';
        const LS_CACHED_CITY_ARRAY = 'sg_cached-city-array';
        const LS_TIMESTAMP = 'sg_timestamp';
        const LS_WEATHER = 'sg_weather';
        const MAX_CACHE_TIME = 10 * 60 * 1000;
        const { cityIdArray } = this.state;
        const xhr = new XMLHttpRequest();
        const timeNow = Date.now();
        const timeStamp = +localStorage.getItem(LS_TIMESTAMP);
        const hasCacheExpired = (timeNow - timeStamp) > MAX_CACHE_TIME;
        const haveCitiesInCache = () => localStorage.getItem(LS_CACHED_CITY_ARRAY)
                .split(',')
                .every(cityId => cityIdArray.indexOf(+cityId) !== -1);
        let cachedWeather;

        try {
            cachedWeather = JSON.parse(localStorage.getItem(LS_WEATHER));
        } catch (ignoreErr) {
            cachedWeather = null;
        }

        if (!hasCacheExpired && haveCitiesInCache() && cachedWeather) {
            const weatherObject = {
                ...cachedWeather,
                list: cachedWeather.list.filter(({id}) => cityIdArray.indexOf(id) > -1)
            };

            this.setState({weatherObject: cachedWeather});
            console.log(`Loaded cached weather for cities with IDs: ${cityIdArray}`);
        } else {
            xhr.open('GET', `http://api.openweathermap.org/data/2.5/group?id=${cityIdArray.join(',')}&units=metric&APPID=${API_KEY}`, false);
            xhr.send();
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                this.setState({weatherObject: JSON.parse(xhr.responseText)});
                console.log(`Fetched weather for cities with IDs: ${cityIdArray}`);
                localStorage.setItem(LS_CACHED_CITY_ARRAY, cityIdArray);
                localStorage.setItem(LS_TIMESTAMP, timeNow);
                localStorage.setItem(LS_WEATHER, xhr.responseText);
                console.log(`Cached weather for cities with IDs: ${cityIdArray}`);
            }
        }
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                weatherObject: this.state.weatherObject
            })
        );

        return (
            <div id="container">
                <Header refresh={this._getWeather.bind(this)}/>
                <div id="content">
                    {childrenWithProps}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    initialCityIdArray: React.PropTypes.array,
    initialWeatherObject: React.PropTypes.object
};
App.defaultProps = {
    initialCityIdArray: [524901, 2643743, 1850147, 5128638],
    initialWeatherObject: {}
};
