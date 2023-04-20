import { useState } from 'react';

function Form2({ handleChange, formData, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const validateName = name => {
    const regex = /^[a-zA-Z]{2,50}$/;
    return regex.test(name);
  };

  const validateAddress = address => address.length >= 10;

  const handleNext = () => {
    const currentErrors = {};

    if (!formData.firstName || !validateName(formData.firstName)) {
      currentErrors.firstName = 'Invalid first name';
    }

    if (formData.lastName && !validateName(formData.lastName)) {
      currentErrors.lastName = 'Invalid last name';
    }

    if (!formData.address || !validateAddress(formData.address)) {
      currentErrors.address = 'Invalid address';
    }

    if (Object.keys(currentErrors).length === 0) {
      nextStep();
    } else {
      setErrors(currentErrors);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          id="address"
          name="address"
          value={formData.address || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.address && <small className="text-danger">{errors.address}</small>}
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
        Back
      </button>
      <button type="button" className="btn btn-primary" onClick={handleNext}>
        Save and Next
      </button>
    </div>
  );
}

export default Form2;
