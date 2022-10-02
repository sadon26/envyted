import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, CreateEvent, EventDetails } from 'pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/event" element={<EventDetails />} />
    </Routes>
  );
};

export default Router;
