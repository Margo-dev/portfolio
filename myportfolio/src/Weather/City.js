import '../Weather/City.css';

function City(props) {

    return (
        <>
            <div className="city_one">
                <h2>{props.city.name !== undefined ? props.city.name : false}</h2>
                <div className='temp'>{props.city.main !== undefined ? Math.round(props.city.main['temp']) - 273 : false} °C</div>
                <div className='cart-body'>{props.city.weather !== undefined ? props.city.weather[0]['description'] : false}</div>
            </div>

        </>
    );
}

export default City;