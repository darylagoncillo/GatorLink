import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='DApictures/img-1.jpg'
              text='Basketball Intramural Playoffs'
              label='Sports'
              path='/services'
            />
            <CardItem
              src='DApictures/img-2.jpg'
              text='Job Networking'
              label='Job'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='DApictures/img-3.jpg'
              text='SFSU Music Festival'
              label='Performing Arts'
              path='/services'
            />
            <CardItem
              src='DApictures/img-4.jpg'
              text='SFSU Art Gallery Showing'
              label='Art'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
        
            <CardItem
              src='DApictures/img-5.jpg'
              text='Super Smash Bros. Tournament'
              label='Gaming'
              path='/products'
            />
            <CardItem
              src='DApictures/img-6.jpg'
              text='Dance Showcase'
              label='Performing Arts'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;