import {React, useState} from 'react';
import '../styles/cart.css'
import Footer from '../Components/footer';
import { MdCancel } from "react-icons/md";
import CartPopularEvents from '../Components/cartPopularEvent';
import Navigations from '../Components/Navigations/navigations';
const CartPageOne = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    return (  
        <>
           <Navigations/>
           <div className='cart-container'>
               <div className="header">
                CART
               </div>
                <table>
                    <thead>
                        <tr>
                            <td>Ticket</td>
                            <td>Location</td>
                            <td>Quantity</td>
                            <td>price</td>
                            <td>Sub total</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The OXYMORON of Kenny Blaq</td>
                            <td>No 26 Kanaga Street Lagos road</td>
                            <td>
                                <div className="button-group">
                                    <span onClick={() => handleQuantityChange(-1)}>-</span>
                                    {quantity}  
                                <span onClick={() => handleQuantityChange(1)}>+</span>
                                </div>  
                            </td>
                            <td>N10000</td>
                            <td>N{10000 * quantity}</td>
                            <td><MdCancel className='remove'/></td>
                        </tr>
                    </tbody>
                </table>
                <button className="proceed-button">Proceed</button>
                <CartPopularEvents/>
          </div>
           <Footer/>
        </>
    );
}
 
export default CartPageOne;