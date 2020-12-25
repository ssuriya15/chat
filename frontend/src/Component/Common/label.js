import React, { useState } from 'react';
import "./common.scss"

function Label(props) {
    return <div className={"customLabel "+props.className}>
                <label>
                    {props.text}
                </label>
            </div>
}

export default Label