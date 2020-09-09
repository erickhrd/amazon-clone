import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../StateProvider/StateProvider";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/PillPack/L_2xDesktop_650x45._CB421946505_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
                <div className="check__right">
                    <Subtotal />
                </div>
        </div>
    )
}

export default Checkout;