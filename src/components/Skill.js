import React from 'react'

function Skill({name,level}) {
    return (
        <div className="skill">
            <p>{name}</p>
            <progress value={level}/>
        </div>
    )
}

export default Skill
