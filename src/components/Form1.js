import { useState } from 'react';

const Form1 = ({ handleChange, formData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validateEmail = email => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex = /^(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*\d{1})(?=.*[@$!%*?&#]{1}).{8,}$/;
    return regex.test(password);
  };

  const handleNext = () => {
    const currentErrors = {};

    if (!formData.emailId || !validateEmail(formData.emailId)) {
      currentErrors.emailId = 'Invalid email';
    }

    if (!formData.password || !validatePassword(formData.password)) {
      currentErrors.password = 'Invalid password';
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
        <label htmlFor="emailId" className="form-label">
          Email ID
        </label>
        <input
          type="email"
          className="form-control"
          id="emailId"
          name="emailId"
          value={formData.emailId || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.emailId && <small className="text-danger">{errors.emailId}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.password && <small className="text-danger">{errors.password}</small>}
      </div>
      <button type="button" className="btn btn-primary" onClick={handleNext}>
        Save and Next
      </button>
    </div>
  );
};

export default Form1;
