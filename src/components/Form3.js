import { useState } from 'react';

const Form3 = ({ handleChange, formData, prevStep, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validatePhoneNumber = phoneNumber => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  const handleSave = () => {
    const currentErrors = {};

    if (!formData.countryCode) {
      currentErrors.countryCode = 'Country code is required';
    }

    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      currentErrors.phoneNumber = 'Invalid phone number';
    }

    if (!formData.acceptTermsAndCondition) {
      currentErrors.acceptTermsAndCondition = 'You must accept the terms and conditions';
    }

    if (Object.keys(currentErrors).length === 0) {
      handleSubmit();
    } else {
      setErrors(currentErrors);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="countryCode" className="form-label">
          Country Code
        </label>
        <select
          className="form-select"
          id="countryCode"
          name="countryCode"
          value={formData.countryCode || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <small className="text-danger">{errors.countryCode}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="acceptTermsAndCondition"
          name="acceptTermsAndCondition"
          checked={formData.acceptTermsAndCondition || false}
          onChange={e => handleChange(e.target.name, e.target.checked)}
        />
        <label className="form-check-label" htmlFor="acceptTermsAndCondition">
          Accept Terms and Conditions
        </label>
        {errors.acceptTermsAndCondition && (
          <small className="text-danger">{errors.acceptTermsAndCondition}</small>
        )}
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
        Back
      </button>
      <button type="button" className="btn btn-primary" onClick={handleSave}>
        Submit
      </button>
    </div>
  );
};

export default Form3;
