import React, { useState } from 'react'
import  avatarsJson from'../assets/avatars.json'
import { environment } from '../environment';
import axios from 'axios';

 const Useravatars=( {setOpenAvatars})=>{
    const userInfo = JSON.parse(localStorage.UserInfo);
    const [avatars, setAvatars] = useState(avatarsJson)
    

    const getAvatar = async (id) => {
        console.log(id); 

        try {
            const response = await axios.post(`${environment.appUrl}avatar`, {
                avatar_id: id,
            }, {
                headers: {
                  Authorization: `Bearer ${userInfo.token}`
                }
              });

            console.log('Avatar selection successful:', response.data);
        } catch (error) {
            console.error('Error selecting avatar:', error);
        }
    };

    
    return (
       <div className="overlay" onClick={()=>setOpenAvatars(false)}>
           <div className='avatars-container'>
            {avatars.map( (singleAvatar)=>{
                return <div key={singleAvatar.id} onClick={()=>getAvatar(singleAvatar.id)}>                 
                    < img src={singleAvatar.path} alt="avatar" />
                    
                    </div>

            })}
       
        </div>
       </div>
    );
}

export default Useravatars;