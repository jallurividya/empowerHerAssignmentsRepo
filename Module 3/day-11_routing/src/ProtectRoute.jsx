import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from './Auth'
const ProtectRoute = ({children}) => {
  if(!isAuthenticate()){
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectRoute