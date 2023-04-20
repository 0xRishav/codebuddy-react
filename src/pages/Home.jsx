import Container from 'react-bootstrap/Container';
import MultiStepForm from '../components/MultiStepForm';

function Home() {
  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>CodeBuddy Assignment</h1>
      </div>
      <Container>
        <MultiStepForm />
      </Container>
    </main>
  );
}

export default Home;
