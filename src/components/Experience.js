import React from 'react'

function Experience({year,role,exp,pic}) {
    return (
        <div className="experience">
            <div>
                <img src={pic} alt=""/>
            </div>

            <div>
            <p>{year}</p>
            <h4>{role}</h4>
            <p>{exp}</p>
            </div>
        </div>
    )
}

export default Experience
