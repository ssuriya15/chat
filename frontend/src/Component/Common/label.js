import React, { useState } from 'react';
import "./common.scss"

function Label(props) {
    return <label className={"customLabel"}>
                {props.text}
            </label>
}

export default Label