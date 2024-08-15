import {useState, React, useEffect} from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import CartPopularEvents from '../Components/cartPopularEvent';
import Footer from '../Components/footer';
import Navigations from '../Components/Navigations/navigations';
import { Link, useNavigate } from 'react-router-dom';
import { environment } from '../environment';
import axios from 'axios';
import {toast} from 'react-toastify';
import { PaystackButton } from 'react-paystack';





const CartPageTwo = () => {
    const [quantity, setQuantity] = useState(1);
    const userInfo = JSON.parse(localStorage.UserInfo);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [carts, setCart] = useState([]);
    const [update, setUpdate] = useState(false);

    const price = 10000;

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const total = quantity * price;

    
    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    const publicKey = 'pk_test_fb120c418e263a53b11cc74872e347ed7b7bbba1';
    const email = userInfo.user.email;
  
    // const onSuccess = (reference) => {
    //   notifySuccess(`Payment was successful. Reference: ${reference}`)
    //   console.log(`Payment was successful. Reference: ${reference}`)
    // };
  
    // const onClose = () => {
    //     console.log('closed');
    //     notifyError('Transaction was not completed');
    // };

    useEffect(() => {
        const getEventInfo = async () => {
          try {
            const result = await axios.get(environment.appUrl + 'carts', {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              }
            });
            console.log(result.data.cart, 'helo');
            setCart(result.data.cart);
          } catch (error) {
            console.log(error);
            setCart([]);
          }
        };
    
        getEventInfo();
      }, [userInfo.token]);


    const handleQuantityChange = (index, change) => {
        setCart(prevCarts => {
            const updatedCarts = [...prevCarts];
            const newQuantity = updatedCarts[index].quantity + change;
    
            // Ensure the quantity does not go below 1
            if (newQuantity > 0) {
                updatedCarts[index].quantity = newQuantity;
            }
    
            return updatedCarts;
        });

        setUpdate(true);
    };

      
    const removeItem = async(id)=> {
        try {
            setLoading(true)
            const result = await axios.delete(environment.appUrl + 'carts/'+id, {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              }
            });
            setLoading(false)
            if(result.data.success) {
                // notifySuccess(result.data.message)
                setCart(carts.filter((cart)=> cart.id !== id));

                // navigate(0);
            }
            else {
                notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
            }
          } catch (error) {
            setLoading(false)
            notifyError(JSON.stringify(error));
          }

    }

    const calculateTotalCost = (tickets) => {
        return tickets.reduce((total, ticket) => {
          return total + (ticket.ticket_cost * ticket.quantity);
        }, 0);
    };



    const handlePayment = () => {
        // const paystack = window.PaystackPop;
        console.log((calculateTotalCost(carts)+1000)*100)
        // const paymentData = {
        //     key: 'sk_test_942d18df826e89a47233d82b80fc03ce320b3f31', // Replace with your Paystack public key
        //     email: 'gabrielimoh30@gmail.com', // Customer's email
        //     amount: 100000, // Amount in kobo (100000 kobo = 1000 NGN)
        //     currency: 'NGN',
        //     callback: function(response) {
        //         // Handle successful payment
        //         alert(`Payment was successful. Reference: ${response.reference}`);
        //     },
        //     onClose: function() {
        //         // Handle payment closed
        //         alert('Transaction was not completed');
        //     }
        // };

        // paystack.paymentPopup(paymentData);
    };


    return ( 
        <>
           <Navigations/>
           
           <div className="cart-container">
              <div className="header">
                CART
               </div>


              <section>
                <div>
                    {carts.map((cart, index)=> (    
                            <div className="cart-item" style={{marginBottom: '10px'}} key={index}>
                                <img
                                src={cart.event.event_image !== null ? cart.event.event_image :"https://placehold.co/100x100"}
                                alt="The Oxymoron of Kenny Blaq"
                                className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <div>
                                        <h3 className="cart-item-title">{cart.event.event_title} ({cart.ticket_type})</h3>
                                        <div className="cart-item-price">₦{cart.ticket_cost * cart.quantity}</div>
                                    </div>

                                    <div className="cart-item-quantity">
                                        <MdOutlineDeleteOutline onClick={()=> removeItem(cart.id)} className='icon'/>
                                        <div>
                                            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                            <span>{cart.quantity}</span>
                                            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))}
                </div>

                <div className="order-summary">
                    <h4>order summary</h4>
                    <p>
                        <span>subtotal</span>
                        <span className='price'>₦ {calculateTotalCost(carts)}</span>
                    </p>
                    <p>
                        <span>total</span>
                        <span className='price'>₦ {calculateTotalCost(carts)+1000}</span>
                    </p>
                    <hr/>
                    <p>
                        <span>total</span>
                        <span className='price'>₦ {calculateTotalCost(carts)+1000}</span>
                    </p>
                    {/* <button onClick={handlePayment} className="checkout">Proceed to checkout</button> */}
                    <PaystackButton
                        text="Pay with Paystack"
                        className="checkout paystack-button"
                        // callback={onSuccess}
                        // close={onClose}
                      
                        onSuccess={async (response) => {
                          console.log('Payment Successful:', response);  // This should log the response object
                          if (response && response.reference) {
                              let register = [];
                      
                              // Prepare the register data
                              for (let i = 0; i < carts.length; i++) {
                                  const element = carts[i];
                                  register.push({
                                      'event_id': element.event_id,
                                      'ticket_type': element.ticket_type,
                                      'ticket_quantity': element.quantity,
                                      'ticket_cost': element.ticket_cost,
                                      'reference': response.reference,
                                      'transaction': response.transaction // Note: 'transaction' might be undefined
                                  });
                              }
                      
                              const registerData = { register };
                      
                              try {
                                  // Send the register data to the server
                                  const registerResult = await axios.post(environment.appUrl + 'Register', registerData, {
                                      headers: {
                                          Authorization: `Bearer ${userInfo.token}`,
                                          'Content-Type': 'application/json',
                                      },
                                  });
                      
                                  if (registerResult.data.success) {
                                      console.log(registerResult.data);
                                      notifySuccess('Payment was successful. Reference: ' + response.reference);
                      
                                      // Update each cart item to mark as paid
                                      const cartData = carts.map(cart => ({
                                          id: cart.id,
                                          quantity: cart.quantity,
                                          paid: true
                                      }));
                                    
                                    try {
                                        const result = await axios.post(environment.appUrl + 'update-carts', { carts: cartData }, {
                                            headers: {
                                                Authorization: `Bearer ${userInfo.token}`,
                                                'Content-Type': 'application/json',
                                            },
                                        });
                                    
                                        if (result.data.success) {
                                            console.log(result.data);
                                            notifySuccess('Carts updated successfully.');
                                            navigate(0); // Refresh the page or navigate as needed
                                        } else {
                                            notifyError(JSON.stringify(result.data.errors));
                                        }
                                    } catch (error) {
                                        notifyError(JSON.stringify(error));
                                    }
                                    
                                  } else {
                                      notifyError(JSON.stringify(registerResult.data.errors));
                                  }
                              } catch (error) {
                                  console.error('Error during registration or cart update:', error);
                                  notifyError('An error occurred: ' + (error.response ? error.response.data.message : error.message));
                              }
                          } else {
                              notifyError('Payment was successful but no reference received.');
                          }
                        }}
                      
                        onClose={() => {
                            console.log('Payment Closed');
                            notifyError('Payment was not completed. Please try again.');
                        }}
                        email={email}
                        amount={(calculateTotalCost(carts)+1000)*100}
                        publicKey={publicKey}
                
                    />
                </div>
              </section>
            <CartPopularEvents/>
            </div>
            <Footer/>
           
        </>
     );
}
 
export default CartPageTwo;