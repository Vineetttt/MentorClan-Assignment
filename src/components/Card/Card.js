import React from 'react';
import "./Card.css";

function Card({filterData}) {
  return (
    <div className='container'>
        {filterData && filterData.map(seller=>(
            <div className="seller" key={seller._id}>
                <div className="details">
                    <img src={seller.profileImg} alt="" />
                    <div className='content'>
                        <h2>{seller.name}</h2>
                        <p>{(seller.about).slice(0,50)}</p>
                    </div>
                </div>
                {(seller.skills.map(skill=>(
                    <button key={Math.random()} className='skills'>{skill}</button>
                )))}
                <br />
                
                <button className='cardButton'>View Profile</button>
                <button className='cardButton'>Book Now</button>
                
            </div>
        ))}
    </div>
  )
}

export default Card