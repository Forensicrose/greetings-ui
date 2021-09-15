import React from 'react'

const Message = (props) => {
    const {greet} = props
return <div className='greet'>{greet ? `Hi it's nice to meet you ${greet}` : ''}</div>
} 

export default Message