import React, { useState } from 'react';
import { PageLayout } from 'layouts';
import { Button, Input } from 'components';
import { useNavigate } from 'react-router-dom';
import { convertFile } from 'utils';

const CreateEvent = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const picture = await convertFile(file);
    setForm((prevForm) => ({ ...prevForm, picture: picture }));
  };

  const handleSubmit = () => {
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
          <div>
            <label className="fw-600 cursor-pointer mb-4 block color-grey" htmlFor="form-pic">
              Upload photo
            </label>
            <input type="file" hidden id="form-pic" onChange={handleFile} />
            {form.picture && (
              <div className="event__form-pic mb-4">
                <img src={form.picture} alt="event-pic" />
              </div>
            )}
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
