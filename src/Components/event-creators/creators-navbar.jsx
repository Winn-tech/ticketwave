import React from 'react'


const CreatorsNavbar = () => {
    const userInfo = localStorage.UserInfo !== undefined && JSON.parse(localStorage.UserInfo);
  return (
    
        <nav className='admin-navbar'>       
        <aside>
            <div>
                <h3>Hi {localStorage.UserInfo !== undefined && userInfo.user.first_name}</h3>
                <p>Let’s sign in some tickets!</p>
            </div>
        </aside>
        
    </nav>
  )
}

export default CreatorsNavbar
