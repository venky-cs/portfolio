import React from 'react'

function Header({image,name,role,email,phone}) {
    return (
        <div className="header card">
            <div className="img">
                <img src={image} alt="profile-picture" />
            </div>

            <div className="details">
                <div className="profile">
                    <div className="person">
                        <h3>{name}</h3>
                        <p>{role}</p>
                    </div>
                    <div className="contact">
                        <p>{email}</p>
                        <p>{phone}</p>
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
