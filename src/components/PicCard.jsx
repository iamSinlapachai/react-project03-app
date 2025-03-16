import React from 'react'

export default function PicCard(props) {
    return (
        <>
            <span style={{ border: "1px solid red", padding: "10px", display: "inline-block" }}>
                <img src={props.showimg} style={{ width: props.wi }} alt="" />
            </span>
            {/* style={{ width: 100px }} */}
        </>
    )
}
