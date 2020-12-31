import React,{useState} from 'react'
import Card from './Card'

import {websites} from './data'

function Section() {
    const [state, setState] = useState(websites)
    return (
        <div>
            <div className="projects card">
                <h3>Projects {Object.keys(state).length}</h3>
                <div className="inline btn">
                    <button value="html" onClick={filterProduct}>HTML,CSS</button>
                    <button value="js" onClick={filterProduct}>Javascript</button>
                    <button value="react" onClick={filterProduct}>React</button>
                </div>
            </div>
            <div className="project">
                {state.map(item => (
                    <Card key={item.id} image={item.image} built={item.built} title={item.title} exp={item.exp} demo={item.demo} code={item.code}/>
                ))}
            </div>
        </div>
    )

    function filterProduct(e) {
        const value = e.target.value;
        console.log(value)

        if (value === 'html') {
            setState(websites)
        }
        else if (value === 'js') {
            const filtered = websites.filter(item => item.tools === 'js')
            setState(filtered)
        }
        else if (value === 'react') {
            const filtered = websites.filter(item => item.tools === 'react')
            setState(filtered)
        }

}
}

export default Section
