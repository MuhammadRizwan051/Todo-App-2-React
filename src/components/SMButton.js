import React from 'react'

export default function SMButton(props) {
    let { value, onClick, style } = props
    return (
        <>
            <button onClick={onClick} style={style}>
                {value}
            </button>
        </>
    )
}