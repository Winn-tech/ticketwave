import React, { useEffect, useState } from 'react';
import loginImages from '../images/auth/LoginImages.png'
import LoginImage2 from '../images/auth/loginImage2.jpg'
import LoginImage3 from '../images/auth/loginImage3.jpg'
import LoginImage4 from '../images/auth/loginImage4.jpg'
import LoginImage5 from '../images/auth/loginImage5.jpg'
const AuthImageSection = () => {
    const images = [ LoginImage2, loginImages, LoginImage3, LoginImage5, LoginImage4]
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    

    useEffect(()=>{
        
        const updateCurrentImage =()=>{
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        const interval = setInterval(()=>{
            updateCurrentImage()
        },3000)
        return () => clearInterval(interval);
    
    }, [images])
    return ( 
        <div className= "image-section">
            <img src={images[currentImageIndex]} alt="" />
        </div>
     );
}
 
export default AuthImageSection;