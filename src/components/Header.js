import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="img">
                <img src="" alt="profile-picture" />
            </div>

            <div className="details">
                <div className="profile">
                    <div className="person">
                        <h3>Billy Person</h3>
                        <p>Front-end developer</p>
                    </div>
                    <div className="contact">
                        <p>billy@example.com</p>
                        <p>(+603)546 624 342</p>
                    </div>
                </div>
                <p>Self-motivated developer,who is willing to learn and create outstanding UI applications</p>

                <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id.
                Quisque feugiat malesuada molestie
            </p>
            </div>
        </div>
    )
}

export default Header;
