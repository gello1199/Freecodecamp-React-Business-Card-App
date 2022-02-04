import React from 'react';

const Info = () => {
    return (
        <div className='info'>
            <img className='info--photo' src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="profile img"  />
            <h2 className='info--name'>Angelo Tsaganeas</h2>
            <h4 className='info--title'>Junior Software Engineer</h4>
            <button className='info--email-button'><i className="fa fa-envelope"></i> Email</button>
            <button className='info--linkedin-button'><i className="fa fa-linkedin-square"></i> LinkedIn</button>
        </div>
    );
}

export default Info;
