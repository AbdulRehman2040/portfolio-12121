"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
const Messenger = () => {
  return (
    <FacebookProvider appId="1434985247627459" chatSupport>
        <CustomChat pageId="497404906783825" minimized={true}/>
      </FacebookProvider> 
  )
}

export default Messenger
