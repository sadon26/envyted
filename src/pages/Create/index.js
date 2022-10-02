import React, { useState } from 'react';
import { PageLayout } from 'layouts';
import { Button, Input } from 'components';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(form);
    localStorage.setItem('eventDetails', JSON.stringify(form));
    navigate('/event');
  };

  return (
    <PageLayout>
      <div className="lg:w-3/5 sm:2-full">
        <h1 className="fs-40 fw-700 mb-8 stagger__in--2">Create your event 🕺</h1>
        <form
          className="event__form stagger__in--4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <Input label="Event Name" type="text" value={form.eventName} onChange={handleChange} name="eventName" />
          </div>
          <div className="mb-4">
            <Input
              label="Host Name"
              className="mb-4"
              type="text"
              value={form.hostName}
              onChange={handleChange}
              name="hostName"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Start Date"
              className="mb-4"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              name="startDate"
            />
          </div>
          <div className="mb-4">
            <Input
              label="End Date"
              className="mb-4"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              name="endDate"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Location"
              className="mb-4"
              type="text"
              value={form.location}
              onChange={handleChange}
              name="location"
            />
          </div>
          <Button type="submit" className="w-40">
            Next
          </Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default CreateEvent;
