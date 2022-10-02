import React from 'react';
import LandingImg from 'assets/images/landing-img.png';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'layouts';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout className="flex lg:justify-between gap-16 lg:items-center lg:flex-row sm:flex-col sm:items-center">
      <div className="home__img stagger__in--1">
        <img src={LandingImg} alt="landing-img" />
      </div>
      <div className="lg:text-right md:text-center sm:text-center stagger__in--3 sm:-order-1 lg:order-1 lg:w-auto sm:w-full">
        <p className="fw-700 fs-64 home__title mb-2">
          <span className="color-purple">Imagine if</span>
          <br />
          <span className="home__gradient-text">Snapchat</span>
          <br />
          <span className="color-purple">had events.</span>
        </p>
        <p className="fw-300 fs-24 color-grey home__desc mb-4">
          Easily host and share events with your friends <br /> across any social media.
        </p>
        <Button className="lg:w-80 sm:w-full" onClick={() => navigate('/create')}>
          <span className="mr-2 d-block">🎉</span>
          <span className="color-white ">Create my event</span>
        </Button>
      </div>
    </PageLayout>
  );
};

export default Home;
