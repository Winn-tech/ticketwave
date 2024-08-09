import React from 'react';
const NavLink = [
    {
      page: {label:'Home', url:'/' },
      subPages: [ 
        
      ],
    },

    {
       page: {label:'Events', url:'/Events' },
      subPages: [
       
      ],
    },
    {
      page: {label:'Create Event', url:'/create-event' },
      subPages: [
        
      ],
    },
    {
      page: {label:'Orders', url:'/orders' },
      subPages: [
        
      ],
    },

    {
        page: {label:'Help', url:'#' },
        subPages: [
          { label: 'How it works', icon: '' , url: '/help' },
          { label: 'FAQs', icon: '' , url: '/FAQ' },
          { label: 'Ticket Distribution', icon: '', url: '/' },
          { label: 'Contact Us', icon: '', url: '/contact-us' },
        ],
      },
      {
        page: {label:'More', url:'' },
        subPages: [
          { label: 'Seat warmers', icon: '', url: '/seat-warmers' },
          { label: 'Applauders', icon: '', url: '/applauders' },
          { label: 'Volunteers', icon: '', url: '/volunteers' },
          { label: 'Extras', icon: '', url: '/extras' },
        ],
      },
    
  ];
  
  export default NavLink;