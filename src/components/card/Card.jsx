import React from 'react';

const Card =({user}) => {
    const {image,firstName,lastName,location,email,phone} = user;
return (
    <section className="avatar">
    <div className="avatar-image">
        <img src={image} alt={`${firstName} ${lastName}`}/>
    </div>
    <div className="avatar-content">
        <h2 className="avatar-header">{firstName} {lastName}</h2>
        <div className="avatar-location">
            {location}
        </div>
        <ul className="avatar-contact-list">
            <li className="avatar-contact-list-item">
                <a href={`mailto:${email}`}>✉</a>
            </li>
            <li className="avatar-contact-list-item">
                <a href={`tel:${phone}`}>✆</a> 
            </li>
        </ul>
    </div>
</section>                     

)    
};

export default Card;