import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

function FormStep({ step, handleChange, formData, nextStep, prevStep, handleSubmit, setStep }) {
  const renderForm = () => {
    switch (step) {
      case 1:
        return <Form1 handleChange={handleChange} formData={formData} nextStep={nextStep} />;
      case 2:
        return (
          <Form2
            handleChange={handleChange}
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Form3
            handleChange={handleChange}
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  const tabButtonClasses = 'btn btn-link text-decoration-none';

  return (
    <div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`${tabButtonClasses} ${step === 1 ? 'fw-bold' : ''}`}
          disabled={step === 1}
          onClick={() => setStep(1)}
        >
          Form 1
        </button>
        <button
          type="button"
          className={`${tabButtonClasses} ${step === 2 ? 'fw-bold' : ''}`}
          disabled={step === 2}
          onClick={() => setStep(2)}
        >
          Form 2
        </button>
        <button
          type="button"
          className={`${tabButtonClasses} ${step === 3 ? 'fw-bold' : ''}`}
          disabled={step === 3}
          onClick={() => setStep(3)}
        >
          Form 3
        </button>
      </div>
      {renderForm()}
    </div>
  );
}

export default FormStep;
