import React from 'react'

function Skill({name,level}) {
    return (
        <div className="skill">
            <p>{name}</p>
            <progress value={level} max="100"/>
        </div>
    )
}

export default Skill
