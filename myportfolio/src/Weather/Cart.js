import './Cart.css';
import Moment from 'react-moment';

function Cart(props) {

    let unixTimestamp = props.day.dt;
    Moment.globalFormat = 'dddd D MMM YYYY';



    return (
        <>

            <div className="cart-all">
                <p>{<Moment unix>{unixTimestamp}</Moment>}</p>
                <h2 className="temp">{Math.round(props.day.main.temp) - 273} °C</h2>
                <img src={`https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} />
                <div className="cart-body">
                    <p className="cart-text">{props.day.weather[0].description}</p>
                </div>

            </div>
        </>
    );
}

export default Cart;