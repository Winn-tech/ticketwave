import {useState, React} from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import CartPopularEvents from '../Components/cartPopularEvent';
import Footer from '../Components/footer';
import Navigations from '../Components/Navigations/navigations';
const CartPageTwo = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 10000;

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

  const total = quantity * price;

    return ( 
        <>
           <Navigations/>
           
           <div className="cart-container">
              <div className="header">
                CART
               </div>

              <section>
                 <div className="cart-item">
                    <img
                    src="https://placehold.co/100x100"
                    alt="The Oxymoron of Kenny Blaq"
                    className="cart-item-image"
                    />
                    <div className="cart-item-details">
                        <div>
                            <h3 className="cart-item-title">The Oxymoron of Kenny Blaq</h3>
                            <div className="cart-item-price">₦{price.toLocaleString()}</div>
                        </div>

                        <div className="cart-item-quantity">
                            <MdOutlineDeleteOutline className='icon'/>
                            <div>
                                <button onClick={handleDecrement}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="order-summary">
                    <h4>order summary</h4>
                    <p>
                        <span>subtotal</span>
                        <span className='price'>₦ 1000</span>
                    </p>
                    <p>
                        <span>total</span>
                        <span className='price'>₦ 1000</span>
                    </p>
                    <hr/>
                    <p>
                        <span>total</span>
                        <span className='price'>₦ 1000</span>
                    </p>
                    <button className="checkout">Proceed to checkout</button>
                </div>
              </section>
            <CartPopularEvents/>
            </div>
            <Footer/>
           
        </>
     );
}
 
export default CartPageTwo;