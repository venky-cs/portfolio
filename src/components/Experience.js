import React from 'react'

function Experience({year,role,exp}) {
    return (
        <div className="experience">
            <p>{year}</p>
            <h4>{role}</h4>
            <p>{exp}</p>
        </div>
    )
}

export default Experience
