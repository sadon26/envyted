import { PageLayout } from 'layouts';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Event = () => {
  const eventDetails = localStorage.getItem('eventDetails');
  const details = JSON.parse(eventDetails);

  if (!eventDetails) {
    return <Navigate to="/create" />;
  }

  const { eventName, hostName, startDate, endDate, location, picture } = details;

  return (
    <PageLayout>
      <div>
        <h1 className="fs-40 fw-700 mb-8 stagger__in--2">Your event details</h1>

        <div className="event__form stagger__in--4">
          <div className="mb-4">
            <h3 className="fw-600">Event Name</h3>
            <p className="color-grey">{eventName ?? 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <h3 className="fw-600">Host Name</h3>
            <p className="color-grey">{hostName ?? 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <h3 className="fw-600">Start Date</h3>
            <p className="color-grey">{startDate ?? 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <h3 className="fw-600">End Date</h3>
            <p className="color-grey">{endDate ?? 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <h3 className="fw-600">Location</h3>
            <p className="color-grey">{location ?? 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <h3 className="fw-600">Picture</h3>
            <div className="event__form-pic mb-4">
              <img src={picture} alt="event-pic" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Event;
