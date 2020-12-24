import React, { useState } from 'react';
import "./common.scss"

function InputBox(props) {
    return <input 
                onChange={e=>props.onChange(e.target.value)} 
                className={"inputBox "+props.className} 
            />
}

export default InputBox