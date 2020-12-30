import React from 'react'
import Card from './Card'

function Section() {
    return (
        <div>
            <div className="projects card">
                <h3>Projects</h3>
                <div className="inline btn">
                    <p>React</p>
                    <p>Vue</p>
                    <p>Responsive</p>
                </div>
            </div>
            <div className="project card">
                <Card image='' tools='' title='' exp='' demo='' code=''/>
            </div>
        </div>
    )
}

export default Section
