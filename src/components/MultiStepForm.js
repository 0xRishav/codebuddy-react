import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStep from './FormStep';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://codebuddy.review/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/posts');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      throw new Error('Failed to submit');
    }
  };

  return (
    <div className="container mt-5">
      <FormStep
        step={step}
        handleChange={handleChange}
        formData={formData}
        nextStep={nextStep}
        prevStep={prevStep}
        setStep={setStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default MultiStepForm;
