import React from 'react'
import Skill from './Skill'
import Blog from './Blog'
import Hobbies from './Hobbie'
import Experience from './Experience'

function Main() {
    return (
        <div className="main">
            <div className="skills card">
                <h3>FRONT END</h3>
                <Skill name="React" level="60"/>
                <Skill name="Javascript" level="60"/>
                <Skill name="CSS" level="60"/>
                <Skill name="Vue" level="60"/>
                <Skill name="Redux" level="60"/>
                <Skill name="React Native" level="60"/>
            </div>

            <div className="blogs card">
                <p>Blog</p>
                <Blog />
            </div>

            <div className="hobbies card">
                <h3>Hobbies</h3>
                <Hobbies image="" hobbie="Gaming" exp="Quisque feugiat malesuada molestie"/>
                <Hobbies image="" hobbie="Cooking" exp="Quisque feugiat malesuada molestie"/>
                <Hobbies image="" hobbie="Biking" exp="Quisque feugiat malesuada molestie"/>
            </div>

            <div className="experiences card">
                <h3>Experiences</h3>
                <Experience year="Feb 2017 -Current"
                role="Front-end developer"
                exp="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie"/>
                <Experience year="Aug 2016 -Feb 2018"
                role="Full-stack developer"
                exp="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie"/>
            </div>
        </div>
    )
}

export default Main
