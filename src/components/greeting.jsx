import React, { useState } from 'react'
import Message from './message'

const Greeting = (props) => {
const {greet, setGreet} = props
const updateGreet = (event) => {
        setGreet(event.target.value)
    }
    return (
        <div className='greeting'>
            <input type= 'text' onChange= {updateGreet} value= {greet}/>
        </div>
    )
}

export default Greeting