import React from 'react'


function Card({image,built,title,exp,code,demo}) {
    return (
        <div className="list">
            <img src={image} alt="webpage"/>
            <p>{built}</p>
            <h4>{title}</h4>
            <p>{exp}</p>

            <div className="inline btn">
                <p>{demo}</p>
                <p>{code}</p>
            </div>
        </div>
    )
}

export default Card
