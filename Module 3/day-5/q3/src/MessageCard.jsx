import React from 'react'

const MessageCard = ({title,msg}) => {
  return (
    <>
      <div className='card'>
          <h3>Title: {title}</h3>
          <p>Message: {msg}</p>
      </div>
    </>
  )
}

export default MessageCard