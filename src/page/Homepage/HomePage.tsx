import React from 'react';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import ImgContainer from '../../components/ImgContainer/ImgContainer';
import './Homepage.css';

const Homepage = () => {

  return (
    <div className="Center">
      <ImgContainer />
      <CardsContainer />
    </div>
  );
}

export default Homepage;
