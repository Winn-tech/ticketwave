import React, { useState } from 'react'
import  avatarsJson from'../assets/avatars.json'

 const Useravatars=( {setOpenAvatars})=>{
    const [avatars, setAvatars] = useState(avatarsJson)

    const getAvatar =(id)=>{
         console.log(id)
    }

    
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