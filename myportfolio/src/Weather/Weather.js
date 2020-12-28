import React from 'react';
import '../Weather/Weather.css';
import { useState, useEffect } from 'react';
import Cart from './Cart';
import City from './City';

let API_KEY = 'e9f8adec2e8d1fef67069e29b8647b99';

function Weather() {
    const [name, setName] = useState(undefined);
    const [days, setDays] = useState([]);
    const [city, setCity] = useState([]);
    let lat;
    let lon;


    const getGeo = () => {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        })
    }

    getGeo();

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCity(data);
            });

    }, []);


    const getWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        const api_url = await
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        const data = await api_url.json();
        setName(data.city.name);
        const dailyData = data.list.filter(item => item.dt_txt.includes("18:00:00"));
        setDays(dailyData);
    }
    const formatCards = () => {
        return days.map((day, index) => <Cart day={day} key={index} />)
    }

    return (

        <>

            <div className="container">
                <div className="row">
                    <div className="predict">
                        <form className='d-flex' onSubmit={getWeather}>
                            <input class="form-control" type="text" name='city' placeholder="Write a city" />
                            <button className='btn btn-outline-info'>Click here</button>
                        </form>

                        <div>
                            <City city={city} />
                        </div>
                        <h2 >{name}</h2>
                        <div className='weather'>
                            {formatCards()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;