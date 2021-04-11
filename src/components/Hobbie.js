import React from 'react'

function Hobbie({image,hobbie,exp}) {
    return (
        <div className="hobbie">
            <img src={image} alt={hobbie+"img"}/>
            <h4>{hobbie}</h4>
            <p>{exp}</p>
        </div>
    )
}

export default Hobbie
