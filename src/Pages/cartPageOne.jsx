import {React, useEffect, useState} from 'react';
import '../styles/cart.css'
import Footer from '../Components/footer';
import { MdCancel } from "react-icons/md";
import CartPopularEvents from '../Components/cartPopularEvent';
import Navigations from '../Components/Navigations/navigations';
import { Link, useNavigate } from 'react-router-dom';
import { environment } from '../environment';
import axios from 'axios';
import {toast} from 'react-toastify';




const CartPageOne = () => {
    const [quantity, setQuantity] = useState(1);
    const userInfo = JSON.parse(localStorage.UserInfo);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [carts, setCart] = useState([]);
    const [update, setUpdate] = useState(false);

    // const handleQuantityChange = (change) => {
    //     setQuantity(prev => Math.max(1, prev + change));
    // };

    const handleQuantityChange = (index, change, max) => {
        setCart(prevCarts => {
            const updatedCarts = [...prevCarts];
            const newQuantity = parseInt(updatedCarts[index].quantity) + change;

            // Ensure the quantity does not go below 1
            if (newQuantity > 0) {
                updatedCarts[index].quantity = (max > updatedCarts[index].quantity && change == 1) ? newQuantity : (change == -1)?newQuantity :updatedCarts[index].quantity;
            }

    
            return updatedCarts;
        });

        setUpdate(true);
    };

    


    
    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };



    useEffect(() => {
        const getEventInfo = async () => {
          try {
            const result = await axios.get(environment.appUrl + 'carts', {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              }
            });
            console.log(result.data.cart);
            setCart(result.data.cart);
          } catch (error) {
            console.log(error);
            setCart([]);
          }
        };
    
        getEventInfo();
      }, [userInfo.token]);


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

    const updateCart = async () => {
        setLoading(true); 
        // let hasShown = false; 
    
        // try {
        //     for (const cart of carts) {
        //         const data = {
        //             quantity: cart.quantity,
        //         };
    
        //         const result = await axios.post(environment.appUrl + 'carts/' + cart.id, data, {
        //             headers: {
        //                 Authorization: `Bearer ${userInfo.token}`,
        //                 'Content-Type': 'multipart/form-data',
        //             },
        //         });
    
        //         if (result.data.success) {
        //             if (!hasShown) {
        //                 notifySuccess(result.data.message);
        //                 hasShown=true;
        //             }
                    
        //             navigate('/Cart/checkout');
                    
        //         } else {
        //             if (!hasShown) {
        //                 notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
        //                 hasShown=true;
        //             }

        //         }
        //     }
        // } catch (error) {
        //     notifyError(`Error: ${error.response ? error.response.data.message : error.message}`);
        //     console.error('There was an error posting the data!', error);
        // } finally {
        //     setLoading(false);
        // }
        
        const cartData = carts.map(cart => ({
            id: cart.id,
            quantity: cart.quantity,
            paid: false
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
                navigate('/Cart/checkout');
            } else {
                notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
            }
        } catch (error) {
            notifyError(`Error: ${error.response ? error.response.data.message : error.message}`);
        }finally {
            setLoading(false);
        }

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
                        {carts.map((cart, index)=> (
                            <tr key={index}>
                                <td>{cart.event.event_title} ({cart.ticket_type})</td>
                                <td>{cart.event.venue_details}</td>
                                <td>
                                    <div className="button-group">
                                        <span onClick={() => handleQuantityChange(index, -1, cart.available)}>
                                        -
                                        </span>
                                        {cart.quantity}  
                                    <span onClick={() => handleQuantityChange(index, 1, cart.available)}>
                                    +
                                    </span>
                                    </div>  
                                </td>
                                <td>N {cart.ticket_cost}</td>
                                <td>N{cart.ticket_cost * cart.quantity}</td>
                                <td onClick={()=> removeItem(cart.id)}><MdCancel className='remove'/></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                {/* <Link to={'/Cart/checkout'}> */}
                     <button className="proceed-button" onClick={()=>{ update ? updateCart() : navigate('/Cart/checkout')}}>Proceed</button>
                {/* </Link> */}
               
                <CartPopularEvents/>
          </div>
           <Footer/>
        </>
    );
}
 
export default CartPageOne;