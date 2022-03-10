import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const data =[
    {
    src:'images/cucphuong.jpeg', 
    text:'Explore the nature waterfall inside the Cuc Phuong National Park',
    label:'Adventure',
    path:'/services'
    },
    {
      src:'images/luxury.jpeg',
      text:'Travel through the Lan Ha bay in a Heritage Cruise',
      label:'Luxury',
      path:'/services'
    },
    {
      src:'images/sondoong.jpeg',
      text:'Uncover the world’s largest cave Son Doong with a specialist',
      label:'Mystery',
      path:'/services'
    },
    {
      src:'images/cuchi.jpeg',
      text:'Discover the Cu Chi tunnel and understand the place in history',
      label:'Adventure',
      path:'/products'
    },
    {
      src:'images/muine.jpeg',
      text:'Ride a quad-bike through the Red Dune Desert',
      label:'Adrenaline',
      path:'/sign-up'
    }
  ]
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {data.map(e =>(
            <CardItem
              src={e.src}
              text={e.text}
              label={e.label}
              path='/services'
            />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
