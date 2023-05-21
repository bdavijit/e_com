import React from 'react';

const Card = (props) => {
      return (
            <div className='card'>
                  <h5 className=''>{props.name}</h5>
                  <img
                        src={props.image}
                        className='responsive'
                        alt={props.name}
                  />
                  <p className=''>{props.price}</p>
                  {/* <hr></hr> */}
            </div>
      );
};

export default Card;